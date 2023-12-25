//This code prints hello world on console window 
console.log("Hello World");

//Arithematic operation

//sum
let a = 10;
let b = 20;
let c = a + b;
console.log("sum=",c);

//multiplication
let d = 40;
let e = 50;
let f = d * e;
console.log("multiplication=", f);

//division
let g = 9
let h = 3
let i = g/h
console.log("division=", i)

//substraction
let j = 9
let k = 3
let l = j/k
console.log("substraction=", l)


//modulus
let m = 11
let n = 2
let o = m%n
console.log("modulus=",o)

//exponentiation
let p = 2
let q = 3
let r = p ** q
console.log("exponentiation=", r)


//Unary Operators: increment and decreament
let s = 10;
//s = s+1;
//console.log("s:", s)
s++;
console.log("s=", s);


let t = 12;
t--;
console.log("t=",t);

let u = 5;
//console.log("++u=",++u); //pre increment : it increase the value first and then print
console.log("u++=",u++); //post increment : it first print the same value and in next execution it will print the increment value
console.log("u=",u);

let v = 9;
//console.log("--v",--v); // pre increment
console.log("v--",v--);  //post decrement
console.log("v=",v);

//Assignment Operator
let x = 5;


// x+= 4 // x = x + 4 = 9
// console.log(x)

// x-= 4 // x = x - 4 = 1
// console.log(x)

//  x*=5 // x = x*5=25
// console.log(x)

// x/=5 // x = x/5 =1
// console.log(x)

x%=2 // x = x/2 = 1
console.log(x)

// comparision operators : "====" checks both equal to and type
let a1 = 5;
let b1 = 2;
console.log("5==2:", a1==b1);
console.log("5!=2:",a1!=b1);

let c1 = 6;
let d1 = "6";
console.log("c1===d1",c1===d1);


//logical operator
let e1 = 11;
let f1 = 12;

let cond1 = e1>f1;  //false
console.log(cond1);

let cond2 = f1>e1;  //true
console.log(cond2);

let cond3 = e1>=f1;
console.log(cond3);

//logical operator
let x1 = 6;
let y1 = 5;

//AND
let cond4 = x1 > y1 //true
let cond5 = x1 === 6 //true
console.log("cond4 && cond5 = ", cond4 && cond5) //true (&& = both condition should be true)

//OR
let cond6 = x1 > y1; //true
let cond7 = x1 === y1; //false
console.log("cond6 || cond7 = ", cond6 || cond7); //true (|| = either of the condition should be true)


//NOT
console.log("!(x1<y1)=", !(x1<y1)) //true

//conditional statements
//example1
let age = 18;
let vote;

if (age === 18){
    vote ="yes"
}
console.log(vote);

//example2
let mode = "dark";
let color;

if (mode === "dark"){
    color = "black"
}

if (mode === "light"){
    color = "white"
}
console.log(color);

//or we can write above example using if else:
let mode1 = "light";
let color1;

if (mode1 === "dark"){
    color1 = "black";
} else {
    color1 = "white"
};
console.log(color1)


let age1 = 25;

if (age >=18) {
    console.log("you can vote")
} else {
    console.log("you cannot vote")
}

let num = 5;

if (num%2===0){
    console.log("the number is even")
} else {
    console.log("the number is odd")
}

let age2 = 26;

if (age <26 ){
    console.log("junior")
} else if (age > 60) {
    console.log("senior")
} else {
    console.log("middle")
}

let mode3 = "light"
let color3;

if (mode3==="dark"){
    color3 = "black"
} else if ( mode3 === "blue") {
    color3 = "blue"
} else if (mode3 === "pink") {
    color3 = "pink"
} else {
    color3 = "white"
}
console.log(color3)

if (mode3==="light"){
console.log(mode3)};

//ternary operator
let age4 = 25;

let result = age>=18? "adult":"not adult";
console.log(result)

let age5 =  16;
let result1 = age>19? console.log("adult"):console.log("not adult");


//alert : one time pop up
//alert("hello!")

//prompt
// let name1 = prompt("hello!");
// console.log(name1);

// Get user to input a number using prompt ("Enter a number:") 
//check if the number is multiple of 5 or not

let number = prompt("Enter a number")
if (number%5===0){
    console.log(number, "number is multilpe of 5")
} else {
    console.log(number, "number is not multilpe of 5")
};

// write a code which can give grades to student according to their scores
let score = prompt("Enter your score")

if (score>=90 && score<=100){
    console.log(score,"A")
} else if (score>=70 && score<=89){
    console.log(score,"B")
} else if (score>=60 && score<=69){
    console.log(score,"C")
} else if (score>=50 && score<59){
    console.log(score,"D")
} else {
    console.log("fail")
};







