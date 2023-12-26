console.log("hello");
console.log(window);
window.console.log("priyanka")
//window.alert("hi!")
console.dir(document.body.childNodes[1]);
console.log(document.body);

//accesiing the elements using ids
let heading = document.getElementById("myId");
console.log(heading);
console.dir(heading);

//accesiing the elements using class
let class1 = document.getElementsByClassName("myClass");
console.log(class1);
console.dir(class1);

//accesiing the elements using tag
let paras = document.getElementsByTagName("p");
console.log(paras);
console.dir(paras);

//query selector for tags
let elements = document.querySelector("p");
console.log(elements);
console.dir(elements);

let allElements = document.querySelectorAll("p");
console.log(allElements);
console.dir(allElements);

//query selector for class
let class2 = document.querySelector(".myClass");
console.log(class2);
console.dir(class2);

let allClass= document.querySelectorAll(".myClass");
console.log(allClass);
console.dir(allClass);

//query selector for id
let element_id = document.querySelector("#myId");
console.log(element_id);
console.dir(element_id);

console.dir(document.body.firstChild);
