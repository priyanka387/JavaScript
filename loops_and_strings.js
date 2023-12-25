//for loop
let num = 5;
for (let i=1; i<=num; i++){
    console.log("priyanka pathak")
};
console.log("loop has ended");

//sum of 1 to n
let sum = 0;
let n =5;

for (i=1; i<=n; i++){
    sum = sum + i;
}
console.log("sum=",sum)

for (i=1; i<=n; i++){
    console.log("i=",i)
};

//infinite loop: we should never write this, website will crash(stopping condition should always be true)
// for (i=1; i>=0; i++){
//     console.log("i=",i)
// };


//while loop
let j = 1;
while (j<=5){
    console.log("j=",j);
    j++;
}

let k = 1;
while (k<=5){
    console.log("priyanka pathak");
    k++;
}

//do while loop
let x = 20;

do {
    console.log("priyanka pathak");
    i++
} while (x<=10);


let a = 1;

do {
    console.log("a=",a);
    a++;
} while (a<=10);

//for-of loop (used for string and variable)
let str = "JavaScript";
let size = 0;

for (let i of str) {
    console.log("i=",i);
    size++
}
console.log("string size:", size)

//for in loop (use for objects and arrays)
let student = {
    name1 : "Rahul Kumar",
    age : 20,
    cgpa : 7.5,
    isPass : true

};

for (let key in student){
    console.log("key=", key, "value=", student[key])
};


//print sum of all the number from 0 to 100
let startnum = 0;
let endnum = 100;
let sum1 = 0;

for (let b = startnum; b<=endnum; b++){
    sum1 = sum1 + b
}
console.log(sum1);


//print all the even number between 0 to 100

for (let num1=0; num1<=100; num1++){
    if (num1%2===0){
        console.log("num1=", num1)
    }
};

//create a game where you can start with any random game number.
//Ask the user to keep guessing the number until the user enters 
//correct value

// let gameNum = 25;
// let userNum = prompt("Guess the game number")
//  while (userNum != gameNum){
//     userNum = prompt("You entered a wrong number, Guess again")  
//  }
// console.log("congratulation! you guessed the right number")

//Strings:
let str1 = "priyanka pathak";
let str2 = "priya";
console.log(str1.length);
console.log(str1[1]);

//template literal
let specialString = `This is template literal`;
console.log(typeof(specialString));

let obj = {
    item : "pen",
    price: 10
};

console.log("the cost of", obj.item, "is", obj.price, "rs");
let output = `the cost of ${obj.item} is ${obj.price} rupees`
console.log(output)

let specialString1 = `This is a template literal ${1+2+3}`;
console.log(specialString1);

// Escape Characters

let str3 = "Apna\tCollege"  //new tab
console.log(str3)
console.log(str3.length)

let str4 = "Apna\nCollege"  // new line
console.log(str4)
console.log(str4.length)

//string methods
let str5 = "apnacollege";
let newstr = str5.toLocaleUpperCase();
console.log(newstr);

let str6 = "APNACOLLEGE";
let newstr6 = str6.toLowerCase();
console.log(newstr6);

let str7 = "  APNACOLLEGE  ";
console.log(str7.length);
let newstr7 = str7.trim();
console.log(newstr7);
console.log(newstr7.length);


let str8 = "123456";
console.log(str8.slice(1,3));


let str9 = "hello"
console.log(str9.slice(1,3));
console.log(str9.slice(1));

//concat
let str10 = "priyanka";
let str11 = "pathak";

console.log(str10.concat(str11));
console.log(str11.concat(str10));

let str12 = str10 + str11
console.log(str12);

let str13 = "hello"
let str14 = 123
console.log(str13+str14);

//replace
let str15 = "hello"
console.log(str15.replace("h", "y"));
console.log(str15.replace("lo","p"));
//console.log(str15.replaceAll("lo","p"));


//CharAT
let str16 = "I love JavaScript";
console.log(str16.charAt(5));
let newstr11 = console.log(str16.replace("I","S"))
console.log(newstr11);



//prompt the user to enter their full name. Generate a username for them based
//on the input.startname with @, followed by their full name and end with fullname length

let fullname = prompt("Enter your name without space");
username = "@" + fullname + fullname.length
console.log(username);





    
