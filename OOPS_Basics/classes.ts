class Person1 {
    // Properties
    firstName: string;
    lastName: string;
    age: number;
  
    // Constructor
    constructor(firstName: string, lastName: string, age: number) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    // Method
    greet(): string {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
  }
  
  // Creating an instance of the Person class
  let person1 = new Person1("John", "Doe", 30);
  
  console.log(person1.greet());  // Output: Hello, my name is John Doe and I am 30 years old.

  //-------------------------------------------------------

  class Employee1 {
    // Public property
    public name: string;
  
    // Private property
    private salary: number;
  
    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
  
    // Public method
    public getSalary(): string {
      return `Salary of ${this.name} is ${this.salary}`;
    }
  
    // Private method
    private calculateBonus(): number {
      return this.salary * 0.1;
    }
  }
  
  let emp = new Employee1("Alice", 50000);
  console.log(emp.getSalary()); // OK: Output -> Salary of Alice is 50000
  // console.log(emp.salary);   // Error: 'salary' is private and only accessible within class 'Employee'
  
  