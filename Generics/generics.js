// Generic function that can accept any type
function identity(value) {
    return value;
}
// Calling the generic function with a string
var output1 = identity("Hello, TypeScript!");
console.log(output1); // Output: Hello, TypeScript!
// Calling the generic function with a number
var output2 = identity(100);
console.log(output2); // Output: 100
//--------------------------------------------------------------
// Generic class to hold any type of value
var Box = /** @class */ (function () {
    function Box(content) {
        this.content = content;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    return Box;
}());
// Creating a Box of strings
var stringBox = new Box("Books");
console.log(stringBox.getContent()); // Output: Books
// Creating a Box of numbers
var numberBox = new Box(123);
console.log(numberBox.getContent()); // Output: 123
