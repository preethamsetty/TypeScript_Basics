// Base class Person
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }

  describe(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Derived class Employee
class Employee extends Person {
  employeeId: number;

  constructor(name: string, age: number, employeeId: number) {
      super(name, age);
      this.employeeId = employeeId;
  }

  describeEmployee(): void {
      console.log(`Employee ID: ${this.employeeId}`);
  }
}

// Further derived class Manager
class Manager extends Employee {
  department: string;

  constructor(name: string, age: number, employeeId: number, department: string) {
      super(name, age, employeeId);
      this.department = department;
  }

  describeManager(): void {
      console.log(`Department: ${this.department}`);
  }
}

// Example usage
const mgr = new Manager("Alice", 40, 102, "HR");
mgr.describe();        // Output: Name: Alice, Age: 40   (from Person class)
mgr.describeEmployee(); // Output: Employee ID: 102   (from Employee class)
mgr.describeManager();  // Output: Department: HR     (from Manager class)
class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound(): void {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    breed: string;
  
    constructor(name: string, breed: string) {
      super(name); // Call parent class constructor
      this.breed = breed;
    }
  
    makeSound(): void {
      console.log(`${this.name} barks!`);
    }
  }
  
  const myDog = new Dog("Buddy", "Golden Retriever");
  myDog.makeSound();  // Output: Buddy barks!
  