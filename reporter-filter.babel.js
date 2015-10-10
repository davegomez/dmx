#!/usr/bin/env node

/**
 * @fileOverview Filter used to format TAP report coming from browsers.
 * @name Reporter Filter
 */

import split from 'split';
import through2 from 'through2';
import once from 'once';
import faucet from 'faucet';
import { PassThrough } from 'stream';

/**
 * Empty function. Useful to initialize functions.
 */
const noop = () => {};

/**
 * Regex functional helper. Receives a regular expression and returns a new function
 * that tests a string.
 * @param {RegExp} regex
 * @returns {Function}
 */
const matchRegex = regex => str => regex.test(str);

/** Validates if the function is the first line of the TAP report.  */
const isTAPFirstLine = matchRegex(/(.*) LOG: 'TAP (.*)'/);

/** Validates if the function is part of the TAP report.  */
const isLogLine = matchRegex(/(.*) LOG: '(.*)'/);

/**
 * Object used to capture a block of content. It receives data until that data doesn't
 * meet a defined requirement and then runs a callback with all the caught info.
 */
const sequentialStringCatcher = {
  queue: [],
  done: true,
  callbacks: {
    readingStart: noop,
    reading: noop,
    end: noop,
    addSuccess: noop,
    addFailure: noop
  },

  /**
   * Add a new event handler.
   * @param {String} event Event target for handler. It can use readingStart, reading, end, addSuccess or addFailure
   * @param {Function} handler Function to bind to the event.
   * @returns {sequentialStringCatcher} this instance.
   */
  on: (event, handler) => {
    if (typeof handler !== "function" || !this.callbacks[event]) return this;
    this.callbacks[event] = handler;
    return this;
  },

  /**
   * Add a new line to the block if the block has started and the line meets the
   * requirements specified on the 'reading' function.
   * @param {String} str Line to verify.
   * @returns {Boolean} True if the line was added. False otherwise.
   */
  add: str => {
    if (this.done && !this.callbacks.readingStart(str)) {
      this.callbacks.addFailure("\n" + str);
      return false;
    }

    this.done = false;

    if (this.callbacks.reading(str)) {
      this.queue.push(str);
      this.callbacks.addSuccess();
      return true;
    }

    this.done = true;
    this.callbacks.end(this.queue.join("\n"));
    this.queue.length = 0;
    return false;
  }
};

/**
 * Set different colors and removes unnecessary info for each line in the TAP report.
 * @param {String} report Raw string.
 * @param {Function} onFormatEnd Function to be called when the formatting ends.
 * @returns {String} Properly formatted TAP report.
 */
const formatTAPReport = (report, onFormatEnd) => {
  const stream = new PassThrough();
  let formattedReport = "\n\n";

  stream.write(report.replace(/(.*) LOG: '(.*)'/g, '$2'));
  stream.end();
  stream.pipe(faucet())
    .on("data", function (chunk) {
      formattedReport += chunk;
    })
    .on("end", function () {
      onFormatEnd(formattedReport);
    });
};

/**
 * Configures a sequentialStringCatcher the first time to capture a TAP block.
 * @param {Object} callbacks Layer object used to set the handlers for the sequentialStringCatcher
 * @param {Function} callbacks.onAddSuccess addSuccess callback.
 * @param {Function} callbacks.onAddFailure addFailure callback.
 * @param {Function} callbacks.onEnd end callback.
 * @returns {sequentialStringCatcher} Configured instance
 */
const configSequentialCatcher = once(callbacks => {
  return Object.create(sequentialStringCatcher)
    .on("addSuccess", callbacks.onAddSuccess)
    .on("addFailure", callbacks.onAddFailure)
    .on("readingStart", isTAPFirstLine)
    .on("reading", isLogLine)
    .on("end", block => formatTAPReport(block, callbacks.onEnd)
    );
});

/**
 * Read the lines of the stream and formats the TAP block.
 * @returns {Destroyabvarransform} Though2 return object to be used in the stream line.
 */
const formatLogs = () => {
  let sequentialCatcher;

  return through2((chunk, enc, callback) => {
    let str = chunk.toString();

    sequentialCatcher = configSequentialCatcher({
      onAddSuccess: callback.bind(this),
      onAddFailure: callback.bind(this, null),
      onEnd: callback.bind(this, null)
    });

    sequentialCatcher.add(str);
  });
};

process.stdin
  .pipe(split())
  .pipe(formatLogs())
  .pipe(process.stdout);
