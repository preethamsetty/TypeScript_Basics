var promise = new Promise(function (resolve, reject) {
    var success = true;
    if (success) {
        resolve(42); // Successfully resolve with the value 42
    }
    else {
        reject("Error occurred"); // Reject the promise with an error message
    }
});
promise
    .then(function (result) {
    console.log("Success:", result); // Output: Success: 42
})
    .catch(function (error) {
    console.log("Error:", error); // If rejected, this block will execute
});
function getUsers(userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (userId === 1) {
                resolve({
                    id: 1,
                    name: "John Doe",
                    email: "john.doe@example.com"
                });
            }
            else {
                reject("User not found");
            }
        }, 2000);
    });
}
getUsers(1)
    .then(function (user) {
    console.log("User Found:", user);
})
    .catch(function (error) {
    console.error("Error:", error);
});
//----------------------------------------------
var promise1 = Promise.resolve(10);
var promise2 = Promise.resolve(20);
var promise3 = Promise.resolve(30);
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values); // Output: [10, 20, 30]
});
