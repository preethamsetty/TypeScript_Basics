// 1.1 Number
// TypeScript has only one number type, and it supports both integers and floating-point values.
// Supports hexadecimal (0x), decimal, octal (0o), and binary (0b) formats.
var age = 30;
console.log(age);
var height = 5.9;
console.log(height);
var octValue = 28; // Octal
console.log(octValue);
var hexValue = 0x1f; // hexadecimal
console.log(hexValue);
var binaryValue = 10; // binary
console.log(binaryValue);
//-----------------------------------------------------
// 1.2 String
// TypeScript's string type allows the declaration of text values. Strings can be written using single quotes 
//('), double quotes ("), or template literals (backticks ` `).
// Template literals allow for embedding expressions in strings using ${expression}.
var fname = "Alice";
var greeting = "Hello, ".concat(fname, "!"); // Using template literals
console.log(greeting);
//---------------------------------------------------
// 1.3 Boolean
// The boolean type can hold only two values: true or false.
var isCompleted = true;
var hasErrors = false;
console.log(isCompleted);
console.log(hasErrors);
//------------------------------------------------------
// 1.4 Null and Undefined
// null and undefined are subtypes of all other types. By default, you can assign them to any type.
// If strictNullChecks is enabled, null and undefined can only be assigned to void or their respective types.
var someValues = null;
var undefinedValue = undefined;
console.log(someValues);
console.log(undefinedValue);
//--------------------------------------------------------
// 2. Special Data Types
// 2.1 Any
// The any type allows a variable to hold any type of value, bypassing type checking. It is useful for dynamic content,
//  but using any too much can defeat the purpose of TypeScript's type system.
var randomValue = "Hello";
console.log(randomValue);
randomValue = 10; // No error, because 'any' accepts any type
console.log(randomValue);
//---------------------------------------------------------------------
// 2.2 Void
// The void type represents the absence of a value. It is often used as the return type for functions 
// that do not return anything.
function logMessages() {
    console.log("This function returns nothing.");
}
logMessages();
//-----------------------------------------------------------------------------
// 2.3 Never
// The never type represents values that never occur. It is used in cases like functions that always throw an error 
// or functions that have an infinite loop.
function throwErrors(message) {
    throw new Error(message);
}
//throwErrors("Preetham");
//------------------------------------------------------------------------------
// 2.4 Unknown
// The unknown type is similar to any, but with a key difference: you cannot perform any operations on an unknown
//  variable without first performing a type check. This makes it safer than any.
var someData = 10;
if (typeof someData === "number") {
}
else {
    console.log("someData is not a number");
}
//---------------------------------------------------------------------------------
// 3. Custom Data Types
// TypeScript allows you to define custom types using union types, tuples, enums, and other constructs.
// 3.1 Union Types
// A union type allows a variable to hold values of more than one type. You define union types using the pipe (|) 
// symbol.
var value1;
value1 = "Hello";
console.log(value1);
value1 = 10; // No error since it's either a string or number
console.log(value1);
//-------------------------------------------------------------------
// 3.2 Tuple
// A tuple is a typed array with a fixed number of elements, where each element may have a different type.
var users;
users = ["Alice", 30]; // Correct
// user = [30, "Alice"];  // Error: The order of types must match
console.log(users);
//---------------------------------------------------------------------
// 3.3 Enum
// enum (enumeration) is a way to define a set of named constants. By default, enums are indexed starting 
// from 0, but you can customize the index.
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue"; // 2
})(Colors || (Colors = {}));
var color = Colors.Green; // Enum can be used like this
console.log(color); // Output: 1
console.log(color);
//You can also customize the enum's values:
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["User"] = 2] = "User";
    Roles[Roles["Guest"] = 3] = "Guest";
})(Roles || (Roles = {}));
var role = Roles.Admin;
console.log(role); // Output: 1
//------------------------------------------------------------------
// 4. Advanced Data Types
// 4.1 Arrays
// An array in TypeScript can store values of a specific type. You can declare arrays using two forms: type[] or 
// Array<type>.
var numbers = [1, 2, 3, 4];
var strings = ["a", "b", "c"];
//------------------------------------------------------------------------
// 4.2 Objects
// In TypeScript, you can define the shape of an object using types. This helps ensure that an object adheres to a 
// particular structure.
var person = {
    name: "Alice",
    age: 30
};
var user = { name: "Bob", age: 25, isAdmin: false };
var value = 123;
value = "abc"; // Both assignments are valid
var employee = { name: "John", age: 30, department: "IT" };
//---------------------------------------------------------------------
// 5. Type Assertions
// Type assertions (similar to type casting in other languages) allow you to manually specify a type for a value 
// when you are certain of its type. There are two forms of type assertions in TypeScript: "angle-bracket" syntax 
// and as syntax.
var someValue = "this is a string";
var strLength = someValue.length;
var anotherLength = someValue.length; // Another way
//-------------------------------------------------------------------------
