// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let aNumber = 126;
let math = function () {
  return {
    add: function (x) {
      return aNumber + x;
    },
    subtract: function(x) {
      return aNumber - x;
    },
    multiply: function(x) {
      return aNumber * x;
    }
  }
};
console.log(math().multiply(621));

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  return function() {
    return count++;
  }
};
const addCount = counter();
addCount();
addCount();
addCount();
addCount();
addCount();
console.log(addCount());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0
  return function() {
    return {
      add: () => count++,
      minus: () => count--,
    }
  }
};
let countings = counterFactory();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().add();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
countings().minus();
console.log(countings().add());
