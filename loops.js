//for loop
// for (let count =1; count<=5; count++) {
//     console.log("Apna College")
// } 

// {console.log("loop has ended")}

//sum of 1 to n
// let sum = 0;
// let n =100
// for (let i=1; i<=n; i++){
//     sum = sum+i
// }
// console.log("sum=", sum)

// for (let j =1; j<=5; j++) {
//     console.log("j=",j)
// } 

// for (var j =1; j<=5; j++) {
//     console.log("j=",j)
// } 
// console.log(j)

//while loop
// let i =1
// while (i<=5){
//     console.log("i=",i);
//     i++
// }

// let k = 1
// while(k <=10){
//     console.log("apna college")
// }

//do while loop
// let i =20;
// do {
//     console.log("apna collge");
//     i++;
// } while (i<=10);

//console.log("apna collge")

// let i =1;
// do {
//     console.log("apna collge");
//     i++;
// } while (i<=10);

// let i=5;
// do {
//     console.log("i=",i);
//     i++;
// } while (i<=5);

//for-of loop
// let str = "javascript"
// let size=0;

// for (let val of str){
//     console.log("i=",i);
//     size++
// }

// console.log(size)

//for in loop
// let student = {
//     name:"Rahul Kumar", 
//     age:20, 
//     cgpa:7.5, 
//     isPass :true};

// for (let key in student) {
//     console.log("key=", key,"value=",student[key]);
// }

//print all the number from 0 to 100
// let startnum=0;
// let endnum = 100;
// let sum =0;

// for (let i = startnum; i<=endnum; i++) {
//     sum = sum + i
// }

// console.log("sum=", sum)

//print all the even number between 0 to 100

// for (let num = 0; num<=100; num++){
//     if (num%2 !==0){
//         console.log("num=",num)
//     }
//}

//create a game where you can start with any random game number.
//Ask the user to keep guessing the number until the user enters 
//correct value

// let gameNumber = 25;
// let userNum = prompt("Guess the game number:");

// while (userNum != gameNumber) {
//     userNum = prompt("you entered wrong number.Guess Again:")
// }
// console.log("congratulations!, you entered the right number")

//Strings:
// let str = "Apnacollege"
// console.log(str[4])

// let str2 = 'priyanka'
// console.log(str2)

//Template literals
// let specialstring = `This is a template literal`;
// console.log(specialstring)

// let obj = {
//     item : "pen",
//     price : 10
// };

// let output = console.log(`The price of ${obj.item} is ${obj.price} rupees`)
// console.log(output)
//console.log("The price of ", obj.item, "is", obj.price);

// let specialstring = `This is a template literal ${1+2+3}`
// console.log(specialstring)

// Escape Characters

// let str = "Apna \t College"
// console.log(str.length)

//string methods
// let str = "apnacollege"
// let newstr = console.log(str.toUpperCase())
// console.log(newstr)

// let str = "APNACOLLEGE"
// let newstr = console.log(str.toLowerCase())
// console.log(newstr)


// let str = "  APNACOLLEGE  "
// let newstr = console.log(str.trim())
// console.log(newstr)

// let str = "  APNACOLLEGE  "
// let newstr = console.log(str.trim())
// console.log(newstr)

// let str = "123456"
// console.log(str.slice(1,3))

// let str1 = "hello"
// console.log(str1.slice(1,3))

//concat
// let str1 = "apna"
// let str2 = "college"

//console.log(str1.concat(str2))
//console.log(str2.concat(str1))

// let res = "I am learning coding from " + str1+str2;
// console.log(res)

// let str3 = "hello"
// let str4 = "123"

// let res2 = str3+str4
// console.log(res2)

// let str = "hello"
// console.log(str.replace("lo", "p"))

// let str = "hellololo"
// console.log(str.replaceAll("lo", "p"))

//CharAT
// let str = "I love javascript"
// console.log(str.charAt(3))

// let str = "I love javascript"
// let newstr = console.log(str.replace("I","S"))
// console.log(newstr)

//prompt the user to enter their full name. Generate a username for them based
//on the input.startname with @, followed by their full name and end with fullname length

let fullName = prompt("Enter your name without spaces")
let userName = "@" + fullName + fullName.length;
console.log(userName)




    
