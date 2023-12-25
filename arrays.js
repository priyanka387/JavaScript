//arrays
let marks = [97,85,67,54,79,87];
console.log(marks);
console.log(typeof(marks));
console.log(marks[2]);
console.log(marks[5]);
console.log(marks[0], marks[1], marks[2]);
console.log(marks.length);

marks[2] = 64;  //arrays are mutable
console.log(marks);

let heroes = ["hulk","thor", "ironman", "batman", "shaktiman", "antman"]
console.log(heroes);
console.log(typeof(heroes));
console.log(heroes.length);
console.log(heroes[1], heroes[3], heroes[5]);

//looping over an array
for (let idx=0; idx<heroes.length; idx++){
    console.log(heroes[idx])
};

for (let item of heroes){
    console.log(item)
};

let cities = ["delhi", "pune", "mumbai", "gurgaon"];
for (let city of cities){
    console.log(city);
}

for (let items of cities){
    console.log(items.toUpperCase())
};
//for a given array with marks of students [85,97,44,37,76,60]
//find the average marks of entire class

let scores = [85,97,44,37,76,60]

let sum = 0
for (let score of scores){
    sum = sum + score
    avg = sum/marks.length
}
console.log(avg);

// for a given array with prices of 5 items [250,645,300,900,50]
//All items have an offer of 10% off on them. change the array to store final price
//after appliying offer

let items = [250, 645, 300, 900, 50];

for (let val of items){
    val = val - val*(10/100)
    console.log(val)
};

i = 0;
for (let val of items){
    console.log(`the value at index ${i} = ${val}`)
    let offer = val/10
    items[i] = items[i] - offer
    console.log(`the value after offer =${items[i]}`)
    i++
};

//array methods:

//push(add items at the end)
let foodItems = ["potato", "litchi", "tomato", "apple"]
foodItems.push("cucumber","chips", "burger", "paneer");
console.log(foodItems);

//pop(delete the item at end)
foodItems.pop()
console.log(foodItems);

//tostrings(convert the array to strings)
console.log(foodItems);
console.log(foodItems.toString());

let marks11 = [10,20,30,40]
console.log(marks11)
console.log(marks11.toString())

let marvel_heroes = ["spiderman", "thor", "ironman"]
let dc_heroes = ["superman", "batman"]
let indian_heroes = ["shaktiman", "krish"]

let heroes1 = marvel_heroes.concat(dc_heroes, indian_heroes);
console.log(heroes1);

//unshift method(add element at start)
let marvel_heroes1 = ["spiderman", "thor", "ironman"]
marvel_heroes1.unshift("shaktiman")
console.log(marvel_heroes1);

//shift(delete element at start) changes values at original array
let marvel_heroes2 = ["spiderman", "thor", "ironman"]
marvel_heroes1.shift()
console.log(marvel_heroes2);

//slice:changes the original array
let marvel_heroes3 = ["spiderman", "thor", "ironman", "antman", "Dr Strangeman"]
console.log(marvel_heroes3);
console.log(marvel_heroes3.slice(1,3));
console.log(marvel_heroes3.slice(1));
console.log(marvel_heroes3.slice());

//splice: changes the original array
let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// console.log(arr);

//add
// arr.splice(2,0,101);
// console.log(arr);


//delete
// arr.splice(3,1);
// console.log(arr);

//replace:
arr.splice(3,1,101);
console.log(arr);

let companies = ["Bllomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// companies.shift()
// console.log(companies)

// companies.splice(2, 1, "Ola")
// console.log(companies)

companies.push("Amazon")
console.log(companies)








