// 1. Type Alias for Primitive Types:
// You can use type aliases to give a meaningful name to a primitive type.


type Name = string;
type Age = number;

let userName: Name = "Alice";
console.log(userName)
let userAge: Age = 30;
console.log(userAge)
// In this example:

// Name is a type alias for the string type.
// Age is a type alias for the number type.

//----------------------------------------------------------------------------
// 2. Type Alias for Object Types:
// You can use type aliases to define the shape of an object.


type User1 = {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;  // Optional property
};

let user: User1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25
};
console.log(user)

// In this example:

// User is a type alias that describes an object with firstName, lastName, and age properties.
// The email property is optional.

//------------------------------------------------------------------------------

// 3. Type Alias for Union Types:
// You can use a type alias to combine different types using union types.


type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";
console.log(currentStatus)
// In this example:

// Status is a type alias that can be either "success", "error", or "loading".
// Union types allow variables to hold one of several values.

//-------------------------------------------------------------------------------

// 4. Type Alias for Function Types:
// Type aliases can also be used to define function types.

type LogMessage = (message: string, code: number) => void;

const log: LogMessage = (msg, code) => {
  console.log(`Code ${code}: ${msg}`);
};

log("Hello, World!", 200);  // Output: Code 200: Hello, World!
// In this example:

// LogMessage is a type alias for a function that takes two parameters: a string message and a number code, and it doesn't return anything (void).

//------------------------------------------------------------------------------
// 5. Type Alias for Arrays:
// You can define type aliases for arrays.


type NameList = string[];

let names: NameList = ["Alice", "Bob", "Charlie"];
console.log(names)
// In this example:

// NameList is a type alias for an array of strings.

//-------------------------------------------------------------------------------


// 6. Type Alias for Tuple Types:
// You can use type aliases to define tuples.


type Point = [number, number, number];

let origins: Point = [0, 0, 0];
console.log(origins)
// In this example:

// Point is a tuple representing three numbers, typically used to store coordinates in 3D space.

//---------------------------------------------------------------------------------------------

// 7. Type Alias for Union and Intersection Types:
// You can combine multiple types using union and intersection types with aliases.


// Union type
type ID = string | number;

let userID: ID = 101;  // Can be string or number

// Intersection type
type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeID: number;
};

let employee: Employee = {
  name: "Alice",
  age: 30,
  employeeID: 12345,
};

console.log(employee)
// In this example:

// ID is a union type that can be either a string or number.
// Employee is an intersection type that extends the Person type by adding an employeeID.

//----------------------------------------------------------------------------------------