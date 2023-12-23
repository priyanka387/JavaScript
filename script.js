/*This code prints hello world
on console window */
//console.log("Hello World");

//Arithematic operation
// let a = 5;
// let b = 2;
// let c = a + b;
// let d = a - b;
// console.log("a=",a,"& b=",b)
// console.log("a+b=", a+b)
// console.log("a-b=", a-b)
// console.log("a*b=", a*b)
// console.log("a/b=", a/b)
// console.log("a%b=", a%b)
// console.log("a**b=", a**b)

//Unary Operators
// let a = 5;
// let b = 2;
// console.log("a=",a,"& b=",b)

// a = a+1;
// console.log("a=",a);

// a= a++;
// console.log("a=",a);

// a = a-1;
// console.log("a=",a);

// a = a--;
// console.log("a=",a)

//console.log("++a=", ++a)
//console.log("a++=", a++)
//console.log("a=",a)

//console.log("--a=", --a)
//console.log("a--=", a--)
//console.log("a=",a)

//Assignment Operator
// let a = 5;
// let b = 2;
// console.log("a=",a,"& b=",b)

//a+=4; // a = a+4
//console.log("a=",a)//9

// a-=4; // a = a-4
// console.log("a=",a)//1

// a*=4// a = a*4
// console.log("a=",a)//20

//a/=4// a = a/4
//console.log("a=",a)

// a%=4// a = a%4
// console.log("a=",a)

// a **= 4;// a = a ** 4
// console.log("a=",a)

// comparision operators
// let a = 5;
// let b = 3;
// console.log("a <= b = ", a <= b);

// logical operator
// let a = 6;
// let b = 6;

// let cond1 = a > b; //false
// let cond2 = a === 6; //true

// //console.log("cond1 || cond2 = ", cond1 || cond2)
// console.log(" !(6<5)= ", !(6<5))

//conditional statements

// let age = 16;

//  if (age >= 18){
//     console.log("you can vote")
// };

// if (age < 18){
//     console.log("you cannot vote")
// };

//let mode = "dark";
//let color;

// if (mode==="dark"){
//     color = "black"
// }

// if (mode==="light"){
//     color = "white"
// }

// console.log(color)

// let mode = "light";
// let color;

// if (mode==="light"){
//     color = "white"
// } else {
//     color = "black"
// }

// console.log(color)

// let age = 25

// if (age>=18){
//     console.log("vote")
// } else {
//     console.log("cannot vote")
// }

// let a = 4;

// if (a %2 === 0) {
//     console.log("even")
// } else {
//     console.log("odd")
// };

// let age = 26;

// if (age < 18 ) {
//     console.log("junior")
// } else if (age > 60) {
//     console.log("senior")
// } else {
//     console.log("middle")
// };

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "dark"
// } else if (mode === "blue") {
//     color = "blue"
// } else if (mode === "pink") {
//     color = "pink"
// } else {
//     color = "white"
// }

// console.log(color)

// let mode = "dark";
// let color;

// if (mode==="dark") {
//     console.log(mode)
// };

//let age = 25;


// let result = age >= 18 ? "adult" : "not adult";
// console.log(result)

//let result = age >= 18 ? console.log("adult") : console.log("not adult");
// console.log(result)



//alert : one time pop up
//alert("hello!")

// Get user to input a number using prompt ("Enter a number:") 
//check if the number is multiple of 5 or not

// let name = prompt("hello!")
// console.log(name)

// let number = prompt("Enter a number")
// if (number%5 ===0) {
//     console.log(number,"number is multiple of 5")
// } else {
//     console.log(number, "number is not multiple of 5")
// }


// write a code which can give grades to student according to their scores

let number = prompt("Enter a number")

if (number >= 90 && number <= 100) {
    console.log(number, "A")
} else if (number >= 70 && number <= 89) {
    console.log(number,"B")
} else if (number >= 60 && number <= 69) {
    console.log(number, "C")
} else if (number >= 50 && number <=59 ) {
    console.log(number, "C")
} else {
    console.log(number, "F")
}


