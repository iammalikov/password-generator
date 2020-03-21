export default function debounce(callback, timeout = 0) {
  let timer;

  return function() {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback.apply(this, arguments);
    }, timeout);
  };
}
