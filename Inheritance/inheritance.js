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
// Base class Person
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Person;
}());
// Derived class Employee
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, employeeId) {
        var _this = _super.call(this, name, age) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.describeEmployee = function () {
        console.log("Employee ID: ".concat(this.employeeId));
    };
    return Employee;
}(Person));
// Further derived class Manager
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, age, employeeId, department) {
        var _this = _super.call(this, name, age, employeeId) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.describeManager = function () {
        console.log("Department: ".concat(this.department));
    };
    return Manager;
}(Employee));
// Example usage
var mgr = new Manager("Alice", 40, 102, "HR");
mgr.describe(); // Output: Name: Alice, Age: 40   (from Person class)
mgr.describeEmployee(); // Output: Employee ID: 102   (from Employee class)
mgr.describeManager(); // Output: Department: HR     (from Manager class)
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Some generic sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this; // Call parent class constructor
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " barks!"));
    };
    return Dog;
}(Animal));
var myDog = new Dog("Buddy", "Golden Retriever");
myDog.makeSound(); // Output: Buddy barks!
