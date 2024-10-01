// 1. Basic Function Syntax
// You can declare functions in TypeScript using both function declarations and function expressions. 
//You can also provide type annotations for the function's parameters and return type.

// Function Declaration Example:

function addition(a: number, b: number): number {
    return a + b;
}

console.log(addition(30,40))

//----------------------------------------------------

// 2. Function Expression
// A function can also be assigned to a variable. 
// The type of the variable can either be inferred or explicitly defined.

//Example:

const multiply = function(a: number, b: number): number {
    return a * b;
};
console.log(multiply(10,20))
// Or using arrow functions:

const divide = (a: number, b: number): number => a / b;
console.log(divide(10,15))

// 3. Optional Parameters
// In TypeScript, you can mark parameters as optional using the ? symbol. When calling the function, 
// you can omit optional parameters.

// Example:

function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}

console.log(greet("John"));              // Output: Hello, John!
console.log(greet("John", "Good Morning"));// Output: Good Morning, John!

//In this example, greeting is an optional parameter.