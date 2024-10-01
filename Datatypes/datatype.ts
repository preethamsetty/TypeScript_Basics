// 1.1 Number
// TypeScript has only one number type, and it supports both integers and floating-point values.
// Supports hexadecimal (0x), decimal, octal (0o), and binary (0b) formats.

let age: number = 30;
console.log(age)
let height: number = 5.9;
console.log(height)
let octValue: number =0o34; // Octal
console.log(octValue)
let hexValue: number = 0x1f;  // hexadecimal
console.log(hexValue)
let binaryValue: number = 0b1010;  // binary
console.log(binaryValue)

//-----------------------------------------------------

// 1.2 String
// TypeScript's string type allows the declaration of text values. Strings can be written using single quotes 
//('), double quotes ("), or template literals (backticks ` `).
// Template literals allow for embedding expressions in strings using ${expression}.

let fname: string = "Alice";
let greeting: string = `Hello, ${fname}!`;  // Using template literals
console.log(greeting)

//---------------------------------------------------

// 1.3 Boolean
// The boolean type can hold only two values: true or false.

let isCompleted: boolean = true;
let hasErrors: boolean = false;
console.log(isCompleted)
console.log(hasErrors)

//------------------------------------------------------

// 1.4 Null and Undefined
// null and undefined are subtypes of all other types. By default, you can assign them to any type.
// If strictNullChecks is enabled, null and undefined can only be assigned to void or their respective types.

let someValues: null = null;
let undefinedValue: undefined = undefined;
console.log(someValues)
console.log(undefinedValue)

//--------------------------------------------------------

// 2. Special Data Types
// 2.1 Any
// The any type allows a variable to hold any type of value, bypassing type checking. It is useful for dynamic content,
//  but using any too much can defeat the purpose of TypeScript's type system.

let randomValue: any = "Hello";
console.log(randomValue)
randomValue = 10;  // No error, because 'any' accepts any type
console.log(randomValue)


//---------------------------------------------------------------------
// 2.2 Void
// The void type represents the absence of a value. It is often used as the return type for functions 
// that do not return anything.

function logMessages(): void {
    console.log("This function returns nothing.");
}
logMessages();

//-----------------------------------------------------------------------------
// 2.3 Never
// The never type represents values that never occur. It is used in cases like functions that always throw an error 
// or functions that have an infinite loop.

function throwErrors(message: string): never {
    throw new Error(message);
}
throwErrors("Preetham");

//------------------------------------------------------------------------------
// 2.4 Unknown
// The unknown type is similar to any, but with a key difference: you cannot perform any operations on an unknown
//  variable without first performing a type check. This makes it safer than any.

let someData: unknown = 10;

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

let value1: string | number;
value1 = "Hello";
console.log(value1)
value1 = 10;  // No error since it's either a string or number
console.log(value1)

//-------------------------------------------------------------------

// 3.2 Tuple
// A tuple is a typed array with a fixed number of elements, where each element may have a different type.

let users: [string, number];
users = ["Alice", 30];  // Correct
// user = [30, "Alice"];  // Error: The order of types must match
console.log(users)

//---------------------------------------------------------------------
// 3.3 Enum
// enum (enumeration) is a way to define a set of named constants. By default, enums are indexed starting 
// from 0, but you can customize the index.

enum Colors {
    Red,  // 0
    Green,  // 1
    Blue  // 2
}

let color: Colors = Colors.Green;  // Enum can be used like this
console.log(color);  // Output: 1
console.log(color)

//You can also customize the enum's values:


enum Roles {
    Admin = 1,
    User = 2,
    Guest = 3
}
let role: Roles = Roles.Admin;
console.log(role);  // Output: 1

//------------------------------------------------------------------
// 4. Advanced Data Types
// 4.1 Arrays
// An array in TypeScript can store values of a specific type. You can declare arrays using two forms: type[] or 
// Array<type>.

let numbers: number[] = [1, 2, 3, 4];
let strings: Array<string> = ["a", "b", "c"];

//------------------------------------------------------------------------

// 4.2 Objects
// In TypeScript, you can define the shape of an object using types. This helps ensure that an object adheres to a 
// particular structure.

let person: { name: string; age: number } = {
    name: "Alice",
    age: 30
};

//You can define custom types for more complex objects:


type User = {
    name: string;
    age: number;
    isAdmin: boolean;
};

let user: User = { name: "Bob", age: 25, isAdmin: false };

//--------------------------------------------------------

// 4.3 Type Aliases
// Type aliases let you create new names for a type, making code easier to read and maintain.

type StringOrNumber = string | number;
let value: StringOrNumber = 123;
value = "abc";  // Both assignments are valid

//--------------------------------------------------------------

// 4.4 Interface
// interface is used to define the structure of an object or class. Interfaces are extensible and can be 
// implemented by classes.

interface Employee {
    name: string;
    age: number;
    department: string;
}

let employee: Employee = { name: "John", age: 30, department: "IT" };

//---------------------------------------------------------------------
// 5. Type Assertions
// Type assertions (similar to type casting in other languages) allow you to manually specify a type for a value 
// when you are certain of its type. There are two forms of type assertions in TypeScript: "angle-bracket" syntax 
// and as syntax.

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

let anotherLength: number = (<string>someValue).length;  // Another way

//-------------------------------------------------------------------------