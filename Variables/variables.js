// 1. Variable Declarations
// TypeScript uses three main keywords to declare variables:
// let: Block-scoped, allows reassignment.
// const: Block-scoped, doesn't allow reassignment.
// var: Function-scoped, allows reassignment (generally discouraged due to scoping issues).
var ages = 25; // block-scoped, can be reassigned
var names = "John"; // block-scoped, cannot be reassigned
var city = "New York"; // function-scoped, avoid using var in modern code
//---------------------------------------------------------------
console.log(ages);
console.log(names);
console.log(city);
