// How to print in console
console.log("Tony Stark");
console.log("I love JavaScript");

//Variables: They are containers for data
name1 = "Tony Stark";            //string
age = 24;                        //integer
console.log(name1,age);

price = 199.99;                   //float
console.log(price);

x = null;                         //null
console.log(x);

y = undefined;                    //undefined
console.log(y);

isFollow = true;                    //boolean
console.log(isFollow);

//how to use let keyword for variable declaration
let fullName = "Tony Stark";
let myAge = 24;
let totalPrice= 199.99
console.log(fullName, myAge, totalPrice);

//"let" cannot be redeclared but can be updated
let newAge = 24;
newAge = 46;
newAge = 54;
console.log(newAge);

//"var" can be redeclared
var radius = 24;
var radius = 50;
var radius = 99;
console.log(radius);

//"const" can neither be redeclared not update its value
const PI = 3.14;
console.log(PI);

let a;    //"let" declarations need not to be initialized
console.log(a);

let newConst = 10;    //"const" declarations must be initialized
console.log(newConst);

//block and global scope : "let" and "const" have block scope and "var" has global scope
{
    let a =20;
    console.log(a);
}

{
    let a =20;
    console.log(a);
}

//object : key , value pairs
const product = {
    title : "ball pen",
    ratig : "4",
    offer : 5,
    price : 10

}
console.log(product);

const profile = {
    userName : "Priyanka",
    isFollow : false,
    folllowers : 200,
    following : 5
}
console.log(profile);

const student = {
    fullName : "Rahul Kumar",
    age : 20,
    cgpa : 9.1,
    isPass : true

}
console.log(student, typeof(student));

console.log(student.fullName);
console.log(student['age']);

//update
student['age'] = student['age'] + 1;
console.log(student['age']);

student['fullName'] = 'Rahul Sharma';
console.log(student['fullName']);



