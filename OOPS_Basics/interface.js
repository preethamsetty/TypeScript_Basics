var employees = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greetss: function () {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, ".");
    }
};
console.log(employees.greetss()); // Output: Hello, my name is John Doe.
var car1 = {
    brand: "Tesla",
    model: "Model 3"
};
var car2 = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(car1);
console.log(car2);
