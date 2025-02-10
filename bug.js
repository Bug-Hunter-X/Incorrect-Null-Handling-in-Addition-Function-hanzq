function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Incorrect handling of null values
  }
  return a + b;
}
console.log(foo(null, 5)); //expect 5, but get 0
console.log(foo(5, null)); //expect 5, but get 0