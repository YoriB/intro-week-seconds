const { check, runTest } = require("../../test-api");



// use a loop to solve this problem :)

// write your loop here

const items = [];
for (let i = 1; i <= 20;  i++) {
    items.push(i)

}
console.log(items)

runTest("check the numbers 1 up to 20 are pushed into items", function () {
  check(items).isEqualTo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
});
