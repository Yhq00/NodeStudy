let x = 1;
function increment() {
  setTimeout(() => console.log(x++), 0);
}
increment();
console.log(x);
