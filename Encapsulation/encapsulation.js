var Employee2 = /** @class */ (function () {
    function Employee2(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee2.prototype.getSalary = function () {
        return this.salary;
    };
    Employee2.prototype.setSalary = function (newSalary) {
        if (newSalary > 0) {
            this.salary = newSalary;
        }
        else {
            console.log("Salary must be positive.");
        }
    };
    Employee2.prototype.getName = function () {
        return this.name;
    };
    return Employee2;
}());
var emps = new Employee2("John", 50000);
console.log(emps.getSalary()); // Output: 50000
emps.setSalary(60000);
console.log(emps.getSalary()); // Output: 60000
// emps.salary = 70000;  // Error: Property 'salary' is private and only accessible within class 'Employee'.
