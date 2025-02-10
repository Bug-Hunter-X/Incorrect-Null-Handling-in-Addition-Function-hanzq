function foo(a, b) {
  //Correct handling of null values
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  return a + b;
}
console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5