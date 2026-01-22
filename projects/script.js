// console.log("hii");

// q-1----------------------------------

let temp =Number(prompt("Enter the tempareture: "));

if (temp >30) {
    alert("tempreture is very high")
}else{
    alert("tempreture is too law")
}

// q-2----------------------------------

// let correctusername = "admin1122";
// let correctpassword = "shreepal2323";

// let username = (prompt("Enter the username: "));
// let Password = (prompt("Enter the Password: "));

// if("username === correctusername && password === correctpassword"){
//     alert("login successfull!..");
// } else {
//     alert(" Login Failed! Wrong username or passsword");
// }


// q-3----------------------------------

// let marks = Number(prompt("Enter your marks: "));

// if(marks >=90 && marks<=100){
//     alert("Congrats'!! Grade- A");
// }
// else if(marks >=75 && marks<=90){
//     alert("Grade- B");
// }
// else if(marks >=50 && marks<=75){
//     alert("Grade- C");
// }
// else if(marks >=0 && marks<=50){
//     alert("You are fail");
// }
// else{
//     alert("invalid marks entered");
// }


// q-4----------------------------------

// let num1 = Number(prompt("Enter the first number"));
// let num2 = Number(prompt("Enter the second number"));

// if(num1 > num2){
//     alert(num1 + " is bigger than" + num2);
// }
// else if(num2 > num1){
//     alert(num2 + " is bigger than" + num1);
// }
// else{
//     alert("Both number are equals");
// }


// q-5----------------------------------

// let daynumber = Number(prompt("Enter the anyone number between 1 to 7 "));

// switch (daynumber){
//     case 1:
//         alert("today is Monday")
//         break;
//     case 2:
//         alert("today is tuesday")
//         break;
//     case 3:
//         alert("today is wednesday")
//         break;
//     case 4:
//         alert("today is thursday")
//         break;
//     case 5:
//         alert("today is friday")
//         break;
//     case 6:
//         alert("today is saturday")
//         break;
//     case 7:
//         alert("today is sunday")
//         break;

//         default:
//         alert("Invalid number (Enter the anyone number between 1 to 7)")
// }


// q-6----------------------------------

// let balance = 15600;

// let withdrawamount = Number(prompt("enter the amount how much you withdraw"));

// if(withdrawamount <= 0) {
//     alert("invalid amount");
// }
// else if(withdrawamount > balance){
//     alert("insufficiant balance ");
// }
// else{
//     balance = balance -withdrawamount;
//     alert("withdraw successfull/n remaining balance:" + balance);
// }

// q-6----------------------------------

// let bill = prompt(" bill amount enter karo:");
// bill = Number(bill);

// let discount = 0;Total

// if (bill >= 5000) {
//     discount = bill * 0.20;
// } else if (bill >= 2000) {
//     discount = bill * 0.10;
// } else if (bill >= 1000) {
//     discount = bill * 0.05;
// } else if (bill > 0) {
//     discount = 0;
// } else {
//     alert(" Invalid bill amount!");
// }

// let finalAmount = bill - discount;

// alert(
//     "Total Bill: ₹" + bill +    
//     "\nDiscount: ₹" + discount +
//     "\nFinal Payable Amount: ₹" + finalAmount
// );


// q-7----------------------------------

// let bill = prompt("enter the total bill amount:");
// bill = Number(bill);

// let discount = 0;

// if (bill >= 5000) {
//     discount = bill * 0.25;
// } 
// else if (bill >= 2000) {
//     discount = bill * 0.15;
// } 
// else if (bill >= 1000) {
//     discount = bill * 0.05;
// } 
// else if (bill > 0) {
//     discount = 0;
// } 
// else {
//     alert("invalid bill amount!");
// }

// let finalAmount = bill - discount;

// alert(
//     "total Bill: ₹" + bill +
//     "\ndiscount: ₹" + discount +
//     "\nfinal payable amount: ₹" + finalAmount
// );

// q-8----------------------------------

// let unit = Number(prompt("enter the unit:- "));
// let bill = 0;

// if (unit<=100) {
//     bill = unit*4;
// } else if (unit <= 120) {
//     bill =(100 * 5)+(unit-100)*7;
// } else {
//     bill = (100*5)+(100*7)+(unit-200)*10;
// }

// alert("total electricity bill: ₹" + bill);

// q-9----------------------------------

// let km = Number(prompt("enter the distance(KM):"));
// let fare = 0;

// if (km<=5) {
//     fare=km*10;
// } else if (km<=15) {
//     fare=(5*10)+(km-5)*8;
// } else {
//     fare=(5*10)+(10*8)+(km-15)*5;
// }

// alert("total Fare: ₹"+fare);

// q-10----------------------------------

// let choice = Number(prompt("1.Pizza  2.Burger  3.Sandwich"));

// switch (choice) {
//     case 1:
//         alert("Pizza Price:-\n \nsmall :-150 \nmedium:-200 \nlarge :-220");
//         break;
//     case 2:
//         alert("Burger Price:\n regular burger:- ₹80 \n cheese burger :-120 \n peri peri cheese burger:-140");
//         break;
//     case 3:
//         alert("Sandwich Price:\n 2 slice:- ₹80 \n 3 slice:- ₹120");
//         break;
//     default:
//         alert("Invalid choice!");
// }
