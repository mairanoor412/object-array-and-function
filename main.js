// Assignment 1: Building Your Friend List
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.
var people = {
    friends: [],
};
var friend1 = {
    firstName: "Mahira",
    lastName: "Khan",
    id: 1,
};
var friend2 = {
    firstName: "Zahira",
    lastName: "Ali",
    id: 2,
};
var friend3 = {
    firstName: "Fatima",
    lastName: "Khan",
    id: 3,
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
// Assignment 2:Manipulating an Array: Rearranging Words
// Objective:
// Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// • Modify the Array:
// • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// • Output the Result:
// • Use join() to combine elements back into a single string: "I am a student of GIAIC".
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(3, 2);
scrambledArray.splice(1, 0, "amm", "a");
var result = scrambledArray.join(" ");
console.log(result);
// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost, and quantity.
// 3. Add these product objects to the inventory array using an appropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.
var inventory = [];
var product1 = {
    name: "Honda",
    model: 2005,
    cost: 1000000,
    quantity: 5,
};
var product2 = {
    name: "Toyota",
    model: 2007,
    cost: 2000000,
    quantity: 4,
};
var product3 = {
    name: "Corolla",
    model: 2015,
    cost: 3000000,
    quantity: 6,
};
inventory.push(product1, product2, product3);
console.log(inventory);
console.log(inventory[2].quantity);
var product4 = {
    name: "Sivic",
    model: 2020,
    cost: 2500000,
    quantity: 8,
};
inventory.push(product4);
console.log(inventory);
console.log(inventory[3].quantity);
var students = [
    {
        name: "Fatima",
        seniorStatus: true,
        completedAssignment: true,
    },
    {
        name: "Zainab",
        seniorStatus: true,
        completedAssignment: true,
    },
    {
        name: "Saba",
        seniorStatus: false,
        completedAssignment: false,
    },
    {
        name: "Fozia",
        seniorStatus: true,
        completedAssignment: false,
    }
];
function seniorStudentCompAssign(students) {
    return students.filter(function (student) {
        return student.seniorStatus && student.completedAssignment;
    });
}
function removeStudentIncompAssign(students) {
    return students.filter(function (student) {
        return !student.seniorStatus || student.completedAssignment;
    });
}
var seniorStudentWithAssign = seniorStudentCompAssign(students);
console.log("Senior Students With Completed Assignments", seniorStudentWithAssign);
var classListUpdate = removeStudentIncompAssign(students);
console.log("Updated Class List", classListUpdate);
