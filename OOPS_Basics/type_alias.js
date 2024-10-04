// 1. Type Alias for Primitive Types:
// You can use type aliases to give a meaningful name to a primitive type.
var userName = "Alice";
console.log(userName);
var userAge = 30;
console.log(userAge);
var user = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
console.log(user);
var currentStatus = "success";
console.log(currentStatus);
var log = function (msg, code) {
    console.log("Code ".concat(code, ": ").concat(msg));
};
log("Hello, World!", 200); // Output: Code 200: Hello, World!
var names = ["Alice", "Bob", "Charlie"];
console.log(names);
var origins = [0, 0, 0];
console.log(origins);
var userID = 101; // Can be string or number
var employee = {
    name: "Alice",
    age: 30,
    employeeID: 12345,
};
console.log(employee);
// In this example:
// ID is a union type that can be either a string or number.
// Employee is an intersection type that extends the Person type by adding an employeeID.
//----------------------------------------------------------------------------------------
