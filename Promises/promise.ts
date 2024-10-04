let promise: Promise<number> = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve(42);  // Successfully resolve with the value 42
    } else {
        reject("Error occurred");  // Reject the promise with an error message
    }
});

promise
    .then((result) => {
        console.log("Success:", result);  // Output: Success: 42
    })
    .catch((error) => {
        console.log("Error:", error);  // If rejected, this block will execute
    });


    //-----------------------------------------------------------------

    interface User {
        id: number;
        name: string;
        email: string;
    }
    
    function getUsers(userId: number): Promise<User> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId === 1) {
                    resolve({
                        id: 1,
                        name: "John Doe",
                        email: "john.doe@example.com"
                    });
                } else {
                    reject("User not found");
                }
            }, 2000);
        });
    }
    
    getUsers(1)
        .then((user) => {
            console.log("User Found:", user);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

        //----------------------------------------------

        let promise1 = Promise.resolve(10);
        let promise2 = Promise.resolve(20);
        let promise3 = Promise.resolve(30);
        
        Promise.all([promise1, promise2, promise3]).then((values) => {
            console.log(values);  // Output: [10, 20, 30]
        });
        