const add = (a, b) => a+b;
const mul = (a, b, c) => a*b*c;
const wrapper = (args) => {
  // implementation
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var functionArgs = slice.call(arguments);

    if (functionArgs in memo)
      return memo[functionArgs];
    else
      return (memo[functionArgs] = args.apply(this, functionArgs));

  }
};
const cachedAdd1 = wrapper(add);
console.log(cachedAdd1(2,2)); // 4 calculated
console.log(cachedAdd1(5,8)); // 13 calculated
console.log(cachedAdd1(2,2)); // 4 from cache

const cachedAdd2 = wrapper(mul);
console.log(cachedAdd2(2,2,2)); 
console.log(cachedAdd2(5,8,3)); 
console.log(cachedAdd2(2,2,2));
