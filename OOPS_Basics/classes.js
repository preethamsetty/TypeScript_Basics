var Person1 = /** @class */ (function () {
    // Constructor
    function Person1(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Method
    Person1.prototype.greet = function () {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, " and I am ").concat(this.age, " years old.");
    };
    return Person1;
}());
// Creating an instance of the Person class
var person1 = new Person1("John", "Doe", 30);
console.log(person1.greet()); // Output: Hello, my name is John Doe and I am 30 years old.
//-------------------------------------------------------
var Employee1 = /** @class */ (function () {
    function Employee1(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    // Public method
    Employee1.prototype.getSalary = function () {
        return "Salary of ".concat(this.name, " is ").concat(this.salary);
    };
    // Private method
    Employee1.prototype.calculateBonus = function () {
        return this.salary * 0.1;
    };
    return Employee1;
}());
var emp = new Employee1("Alice", 50000);
console.log(emp.getSalary()); // OK: Output -> Salary of Alice is 50000
//console.log(emp.salary);   // Error: 'salary' is private and only accessible within class 'Employee'
