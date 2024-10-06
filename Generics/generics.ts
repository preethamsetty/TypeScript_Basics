// Generic function that can accept any type
function identity<T>(value: T): T {
    return value;
  }
  
  // Calling the generic function with a string
  let output1 = identity<string>("Hello, TypeScript!");
  console.log(output1);  // Output: Hello, TypeScript!
  
  // Calling the generic function with a number
  let output2 = identity<number>(100);
  console.log(output2);  // Output: 100

  
//--------------------------------------------------------------

// Generic class to hold any type of value
class Box<T> {
    content: T;
    
    constructor(content: T) {
      this.content = content;
    }
  
    getContent(): T {
      return this.content;
    }
  }
  
  // Creating a Box of strings
  let stringBox = new Box<string>("Books");
  console.log(stringBox.getContent());  // Output: Books
  
  // Creating a Box of numbers
  let numberBox = new Box<number>(123);
  console.log(numberBox.getContent());  // Output: 123
  