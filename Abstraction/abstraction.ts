abstract class Shape {
    abstract calculateArea(): number;  // Abstract method, no implementation here
  
    describe(): void {
      console.log("This is a shape.");
    }
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  const myCircle = new Circle(10);
  console.log(myCircle.calculateArea());  // Output: 314.159...
  
  //-----------------------------------------------------------
  // Abstract class Vehicle
abstract class Vehicle {
  // Abstract method (must be implemented by derived classes)
  abstract startEngine(): void;

  // Concrete method (shared functionality)
  stopEngine(): void {
      console.log("The engine has been stopped.");
  }
}

// Derived class Car that extends Vehicle
class Car extends Vehicle {
  startEngine(): void {
      console.log("Car engine started with a key.");
  }
}

// Derived class Motorcycle that extends Vehicle
class Motorcycle extends Vehicle {
  startEngine(): void {
      console.log("Motorcycle engine started with a button.");
  }
}

// Example usage
const myCar = new Car();
myCar.startEngine();  // Output: Car engine started with a key.
myCar.stopEngine();   // Output: The engine has been stopped.

const myMotorcycle = new Motorcycle();
myMotorcycle.startEngine();  // Output: Motorcycle engine started with a button.
myMotorcycle.stopEngine();   // Output: The engine has been stopped.
