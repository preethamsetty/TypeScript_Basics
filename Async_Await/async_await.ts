interface User {
    id: number;
    name: string;
    email: string;
}
function getUser(userId: number): Promise<User> {
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
async function getUserData(userId: number): Promise<void> {
    try {
        let user = await getUser(userId);
        console.log("User Found:", user);
    } catch (error) {
        console.error("Error:", error);
    }
}

getUserData(1);  // Output after 2 seconds: User Found: { id: 1, name: "John Doe", email: "john.doe@example.com" }
