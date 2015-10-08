export default function (elements) {
  return classNames => {
    classNames
      .split(/ +/)
      .forEach(className =>
        [...elements]
          .forEach(element =>
            element.classList.add(className)
          )
      );

    return elements;
  };
}
