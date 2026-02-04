// q-1-------------------------


let boys = [
    {name: "dipak ladani ", marks:85},
    {name: "darshit gadhiya ", marks:78},
    {name: "krrish virpariya ", marks:65},
    {name: "dhruvik parmar ", marks:55},
    {name: "sahil zinzuvadiya ", marks:50},
]

console.log("***** All Students *****");
boys.map(student =>{
    console.log(student.name + "-" + student.marks);
});

let passedstudents = boys.filter(student => student.marks > 60);

console.log("\n ***** Students above the 60 marks *****");
passedstudents.map(s => console.log(s.name));

let totalmarks = boys.reduce((total , student)=> {
    return total + student.marks;
}, 0);

console.log("\n Total marks:-", totalmarks);

let newstudent = {name:"dharmik", marks: 84};
boys = [...boys ,newstudent];

console.log("\n ***** updated students list *****");
boys.map(s => console.log(s.name + "-" + s.marks));







// q-2 --------------------------------








// let products = [
//     {name: "T-shirt", price:550,quantity:1},
//     {name: "Shirt", price:900,quantity:3},
//     {name: "Handkerchief", price:50,quantity:1},
//     {name: "Shocks", price:20,quantity:2},
//     {name: "Pant", price:750,quantity:2}
// ];

// console.log("***** All products *****");
// products.map(product => {
//     console.log(product.name);
// });

// let expensiveproducts = products.filter(product => product.price >500);
// console.log("\n***** Products above 500 *****");
// expensiveproducts.map(p => console.log(p.name));

// let totalcartvalue = products.reduce ((total, product)=>{
//     return total+ (product.price * product.quantity);
// },0);

// console.log("\nTotal cart value:", totalcartvalue);

// products = products.map(product => {
//   if (product.name === "T-shirt") {
//     return { ...product, quantity: 2 };
//   }
//   return product;
// });


// q-3--------------------------------




// console.log("*** Employe details ***");

// let employe = {
//     name:"Sagar",
//     age: 21,
//     adress: {
//         city:"Rajkot",
//         state:"Gujarat",
//         pincode: 360004
//     },
//     skills:["HTML","CSS","JAVASCRIPT"]
// };

// console.log("Employe name:", employe.name);
// console.log("city:", employe.adress.city);
// console.log("skills :", employe.skills);

// employe = {
//     ...employe,
//     skills:["React", "Node JS"]
// };

// console.log("\n Updated skills", employe.skills);

// employe = {
//     ...employe,
//     city:"Baroda"
// };

// console.log("\n Updated city -", employe.city);

// let {name , age} = employe;

// console.log("\n Destructre value");
// console.log("name:", name);
// console.log("age:", age);




//  Q-4--------------------




// let numbers = [1,2,3,4,5,6,7,8,9,10];

// let evennumbers = numbers.filter(num => num % 2 === 0);
// console.log("Even numbers:",evennumbers);

// let oddnumbers = numbers.filter(num => num % 2 !== 0);
// console.log("Odd numbers:",oddnumbers);

// let totalsum = numbers.reduce((sum, num)=> {
//     return sum + num;
// },0);

// console.log("total-sum = ",totalsum);

// let squrenumbers = numbers.map(num => num *num);
// console.log("squere values:",squrenumbers);


// q-5--------------


// let students = [
//     { name: "Amit", marks: 75 },
//     { name: "Rahul", marks: 32 },
//     { name: "Neha", marks: 60 },
//     { name: "Pooja", marks: 40 },
//     { name: "Ravi", marks: 28 }
// ];

// let resultAdded = students.map(student => {
//     student.result = student.marks >= 40 ? "pass" : "fail";
//     return student;
// });

// let passedStudents = resultAdded.filter(
//     student => student.result === "pass"
// );

// let totalMarks = resultAdded.reduce(
//     (sum, student) => sum + student.marks,
//     0
// );

// let averageMarks = totalMarks / resultAdded.length;

// console.log("all Students:");
// resultAdded.forEach(s => {
//     console.log(`${s.name} - ${s.marks} - ${s.result}`);
// });

// console.log("\npassed Students:");
// passedStudents.forEach(s => {
//     console.log(s.name);
// });

// console.log("\naverage Marks:", averageMarks);
