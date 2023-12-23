// Function

//Function1
function myFunction() {
    console.log("Apna Collge");
    console.log("We are learning java script");
}
myFunction()

//Function2
function myFunction2(msg) {
    console.log(msg)
}

myFunction2("I love JS")

//Function3
function mySum(a,b){
    console.log("sum=", a+b)
}

mySum(3,4)

//Function4
function sum(x,y) {
    let s = x+y;
    return s;
}

let val = sum(6,7)
console.log(val)

//Arrow Function

//ex-1 :normal function
function sum1(a,b) {
    return a+b;
}

//ex-1 :arrow function
const arrowSum = (a,b) => {
    console.log(a+b);
}

function mul(x,y) {
    return x*y;
}

const arrowMul = (x,y) => {
    console.log(x*y);
}

const printhello = () => {
    console.log("hello")
}

//create a function using the function keyword that takes a string as an argument and returns
//the number of vowels in the string

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ) {
            count++;
        }
    }   
    console.log(count)
}

countVowels("ApnaCollege")

const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ) {
            count++;
        }
    }   
    console.log(count)
}

//"for each" method
let arr = [1,2,3,4,5];

arr.forEach(function printVal(val) {
    console.log(val)
})

arr.forEach((val) => {
    console.log(val);
})

let arr1 = ["delhi", "mumbai", "pune"]

arr1.forEach((val, idx) => {
    console.log(val.toUpperCase(), idx)
}
);

//for a given array of numbers, print the square of each value using forEach loop

let arr3 = [1,2,3,4,5,6,7,8,9]

arr3.forEach((val) => {
    val = val*val;
    console.log(val);
});

let arr4 = [12,13,14,15,16,17,18,19]
let calSquare = (val) => {
    val = val*val;
    console.log(val);
}

arr4.forEach(calSquare);

//map: return new array

let arr5 = [24,56,78];

arr5.map((val) => {
    console.log(val);
});

let arr6 = [23,53,89];

let newArray = arr6.map((val) => {
    return val*val;
}); 

console.log(newArray);

//filer: creates a new array of element

let arr7 = [1,2,3,4,5,6,7,8,9]

let evenArray = arr7.filter((val) => {
    return val%2===0;
}
);

console.log(evenArray)

let arr8 = [3,2,4,7,98,34]

let numArray = arr8.filter((val) => {
    return val>3;
}
);

console.log(numArray)


//reduce : performs some operation and reduce it to a single value. it returns that value

const arr9 = [1,2,3,4];

let output = arr9.reduce((res, curr) => {
    return res + curr;
}
);

console.log(output);

const arr10 = [5,6,2,1,3];

let output1 = arr10.reduce((prev, curr) => {
    return prev> curr ? prev : curr;
});

console.log(output1);

//we are given a array of marks of students . Filter out the marks of students scored 90+

let marks = [98,56,45,23,97,91,23,41,87,69];

let toppers = marks.filter((val) => {
    return val > 90;
});

console.log(toppers)

//take a number n as input from user, create an array of numbers 1 to n .
//use the reduce method to calculte sum of all numbers in the array.
//use the reduce method to calculate product of all numbers in the array

let n = prompt("Enter a number:");

let arr12 = []
for (let i=1; i<=n; i++) {
    arr12[i-1] = i; 
}

console.log(arr12);

let newSum1 = arr12.reduce((res, prev) => {
    return res + prev
}

);

console.log(newSum1);

let newProd1 = arr12.reduce((res, prev) => {
    return res * prev
}

);

console.log(newProd1);


