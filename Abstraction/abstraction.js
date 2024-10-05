var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.describe = function () {
        console.log("This is a shape.");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var myCircle = new Circle(10);
console.log(myCircle.calculateArea()); // Output: 314.159...
//-----------------------------------------------------------
// Abstract class Vehicle
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    // Concrete method (shared functionality)
    Vehicle.prototype.stopEngine = function () {
        console.log("The engine has been stopped.");
    };
    return Vehicle;
}());
// Derived class Car that extends Vehicle
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.startEngine = function () {
        console.log("Car engine started with a key.");
    };
    return Car;
}(Vehicle));
// Derived class Motorcycle that extends Vehicle
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Motorcycle.prototype.startEngine = function () {
        console.log("Motorcycle engine started with a button.");
    };
    return Motorcycle;
}(Vehicle));
// Example usage
var myCar = new Car();
myCar.startEngine(); // Output: Car engine started with a key.
myCar.stopEngine(); // Output: The engine has been stopped.
var myMotorcycle = new Motorcycle();
myMotorcycle.startEngine(); // Output: Motorcycle engine started with a button.
myMotorcycle.stopEngine(); // Output: The engine has been stopped.
