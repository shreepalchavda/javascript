// ----------q-1-----------


function find(n) {
    let a = 0, b = 1;

    for (let i=1; i <=n;i++) {
        console.log(a);
        let next=a + b;
        a = b;
        b = next;
    }
}

find(9);



// ----------q-2-----------



// function digit(num) {
//     let sum = 0;

//     while (num > 0) {
//         sum += num % 10;  
//         num = Math.floor(num/10); 
//     }

//     return sum;
// }

// console.log(digit(123));



// ----------q-3-----------



// function isPalindrome(num) {
//     let original = num;
//     let reversed = 0;

//     while (num > 0) {
//         let digit = num % 10;
//         reversed = reversed * 10 + digit;
//         num = Math.floor(num / 10);
//     }

//     return original === reversed;
// }

// console.log(isPalindrome(121)); 
// console.log(isPalindrome(123)); 



// ----------q-4-----------



// function factorial(n) {
//     if (n<0) return "Factorial not defined";

//     let result=1;
//     for (let i=1;i<=n;i++) {
//         result *= i;
//     }
//     return result;
// }


// console.log(factorial(6)); 
// console.log(factorial(0)); 


// ----------q-5-----------



// function reverseNumber(num) {
//     let reversed = 0;

//     while (num>0) {
//         let digit =num%10;
//         reversed = reversed*10+digit;
//         num = Math.floor(num/10);
//     }

//     return reversed;
// }

// console.log(reverseNumber(123)); 
