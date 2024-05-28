// Assignment 1: Building Your Friend List

// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three separate objects, each representing a friend, with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.

const people = {
    friends : [],
};

const friend1 = {
    firstName: "Mahira" as string,
    lastName: "Khan" as string,
    id : 1 as number,
};

const friend2 = {
    firstName: "Zahira" as string,
    lastName: "Ali" as string,
    id : 2 as number,
};

const friend3 = {
    firstName: "Fatima" as string,
    lastName: "Khan" as string,
    id : 3 as number ,
};

people.friends.push(friend1 , friend2 , friend3)
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

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

scrambledArray.splice(2 , 2);

scrambledArray.pop()

scrambledArray.unshift("I")

scrambledArray.splice(3 , 2)

scrambledArray.splice(1 ,0 , "amm" , "a")

let result = scrambledArray.join(" ")
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

const inventory = [];



const product1 = {
    name : "Honda",
    model: 2005,
    cost: 1000000,
    quantity: 5,
};

let product2 = {
    name : "Toyota",
    model: 2007,
    cost: 2000000,
    quantity: 4,
};

let product3 = {
    name : "Corolla",
    model: 2015,
    cost: 3000000,
    quantity: 6,
};

inventory.push(product1 , product2 , product3)
console.log(inventory);

console.log(inventory[2].quantity);

let product4 = {
    name: "Sivic",
    model : 2020,
    cost : 2500000,
    quantity : 8,
}
inventory.push(product4)
console.log(inventory);
console.log(inventory[3].quantity);

// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

type Student = {
name : string,
seniorStatus : boolean,
completedAssignment : boolean,
}
let students : Student[] = [
    {
        name : "Fatima",
        seniorStatus : true,
        completedAssignment : true, 
    },
    {
        name : "Zainab",
        seniorStatus : true,
        completedAssignment : true, 
    },
    {
        name : "Saba",
        seniorStatus : false,
        completedAssignment : false, 
    },
    {
        name : "Fozia",
        seniorStatus : true,
        completedAssignment : false, 
    }

];
function seniorStudentCompAssign (students: Student[]){
    return students.filter(student=>
    student.seniorStatus && student.completedAssignment
    );
}

function removeStudentIncompAssign (students:Student[]){
    return students.filter(student => 
     !student.seniorStatus || student.completedAssignment
    );
}
const seniorStudentWithAssign = seniorStudentCompAssign(students)
console.log("Senior Students With Completed Assignments",seniorStudentWithAssign);

const classListUpdate = removeStudentIncompAssign(students)
console.log("Updated Class List",classListUpdate);




