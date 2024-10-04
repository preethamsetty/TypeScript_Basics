(function () {
    let message: string = "Hello from IIFE!";
    console.log(message);
})();

//------------------------------------------

(function (num1: number, num2: number): number {
    let sum = num1 + num2;
    console.log(`Sum: ${sum}`);
    return sum;
})(5, 10);
