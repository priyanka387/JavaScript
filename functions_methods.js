// Function

//example1
function myFunction(){
    console.log("Welcome to my channel")
    console.log("I love javascript")
};

myFunction();

//example2
function myFunction1(msg){
    console.log(msg)
}
myFunction1("I love Javascript");

//example3
function mySum(a,b){
    console.log(a+b)
};

mySum(3,5);

//example4
function sum(x,y){
    s = x+y
    return s
};
let val= sum(6,8);
console.log(val);

//Arrow functions
function sum(a,b){
    return a+b
};

const arrowSum = (a,b) => {
    console.log(a+b)
}

console.log(arrowSum);

function sub(a,b){
    return a-b
};

const arrowSub = (a,b) => {
    console.log(a-b)
}

console.log(arrowSub);

function mul(a,b){
    return a*b
};

const arrowMul = (a,b) =>{
    console.log(a*b)
}

console.log(arrowMul);

arrowMul(3,4);

const printHello = () => {
    console.log("hello")
}

printHello();

//create a function using the "function" keyword that takes a string 
// as an argument and return the number of vowels in the string


function countVowels(str){
    let count = 0;
    for (const char of str){
        if (char==="a"||
           char==="e" || 
           char==="i" || 
           char==="o" || 
           char==="au"
           ) {
           count++
        }

    }
    console.log(count);
};

countVowels("apnacollege");
countVowels("priyanka");

const countVow = (str) => {
    let count = 0;
    for (const char of str){
        if (char==="a"||
           char==="e" || 
           char==="i" || 
           char==="o" || 
           char==="au"
           ) {
           count++
        }

    }
    console.log(count);

};

countVow("priyanka");

//for each
let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val)
});

let cities = ["delhi", "mumbai", "pune", "gurgaon"];

cities.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr)
});

// for a given array of numbers print the square of each value using forEach loop
 let num = [1,2,3,4,5,6,7,8,9]

num.forEach((val) =>{
    val = val**2
    console.log(val)
}
);

let calcSquare = num => {
    console.log(num**2)
};

num.forEach(calcSquare);

//map
let arr1 = [1,2,3,4,5,6];
let newArr = arr1.map((val) => {
    return val**2
});

console.log(newArr);

//filter 
let arr2 = [45,91,67,22,48,92,69,56]

let evenArr = arr2.filter((val) => {
    return val%2===0;
});

console.log(evenArr);

//reduce
let arr3 = [1,2,3,4]

const output = arr3.reduce((res, curr) => {
    return res+curr;
});

console.log(output);

let arr4 = [4,8,6,9];

const largest = arr4.reduce((prev,curr) =>{
    return prev > curr ? prev : curr;
});

console.log(largest);

let marks = [97,64,32,49,99,86];
let res = marks.filter((val) =>{
    return val>90
});
console.log(res);

let n = prompt("enter a number")
let arr5 = [];
for (let i=1; i<=n; i++){
    arr5[i-1] =i
}
console.log(arr5);

let sum1 = arr5.reduce((res,curr)=> {
    return res+curr
});

console.log(sum1);


let factorial = arr5.reduce((res,curr)=> {
    return res*curr
});

console.log(factorial);











  

