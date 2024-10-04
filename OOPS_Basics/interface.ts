interface Person2 {
    firstName: string;
    lastName: string;
    age: number;
    greetss(): string;
  }
  
  let employees: Person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greetss: function () {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  };
  
  console.log(employees.greetss());  // Output: Hello, my name is John Doe.

  //-------------------------------------------------------------------

  interface Vehicle {
    brand: string;
    model: string;
    year?: number;  // Optional property
  }
  
  let car1: Vehicle = {
    brand: "Tesla",
    model: "Model 3"
  };
  
  let car2: Vehicle = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
  };

console.log(car1)
console.log(car2)
  
  