export default function (string, pattern) {
  return () => string.replace(pattern, '');
}
