//arrays

//let marks = [97,85,64,56,74]
// console.log(marks)
// let heros = ["hulk", "thor", "ironman", "batname"]
// console.log(heros)
// let info = ["rahul", "10", "Delhi"]
// console.log(info.length)

// console.log(marks[0], marks[1], marks[2])

// marks[2] = 67
// console.log(marks)

//let heroes = ["hulk", "thor", "ironman", "batname", "shaktiman", "antman"]
//console.log(heroes);

// for (let i=0; i<heroes.length;i++){
//     console.log(heroes[i])
// }

// for (let el of heroes){
//     console.log(el)
// }

// let cities = ["Delhi", "Mumbai", "Hyd","Bangalore", "Pune"]

// for (let item of cities){
//     console.log(item.toUpperCase())
// }

//for a given array with marks of students [85,97,44,37,76,60]
//find the average marks of entire class

// let marks = [85,97,44,37,76,60]

// let sum = 0;
// for (let val of marks) {
//     sum = sum+val;
//     avg = sum/marks.length
// }

// console.log(avg)


// for a given array with prices of 5 items [250,645,300,900,50]
//All items have an offer of 10% off on them. change the array to store final price
//after appliying offer

//let items = [250, 645, 300, 900, 50];
// let i = 0;

// for (let val of items){
//     //console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`)
//     i++;
// }

// for (let i = 0; i < items.length; i++){
//     let offer = items[i]/10;
//     items[i] = items[i] - offer;

// }

// console.log(items)

//array methods:
//let foodItems = ["potato", "litchi", "tomato", "apple"]
// foodItems.push("paneer", "burger")
// console.log(foodItems)


// foodItems.pop()
// console.log(foodItems)

// console.log(foodItems)
// console.log(foodItems.toString())

// let marks = [10,20,30,40]
// console.log(marks)
// console.log(marks.toString())

// let marvel_heroes = ["spiderman", "thor", "ironman"];
// let dc_heroes = ["superman", "batman"];

// let heroes = marvel_heroes.concat(dc_heroes);
// console.log(heroes);

//unshift method:
//let marvel_heroes = ["spiderman", "thor", "ironman"];
// marvel_heroes.unshift("antman")
// console.log(marvel_heroes)

// let val = marvel_heroes.shift()
// console.log(val)
// console.log(marvel_heroes)

//let marvel_heroes = ["spiderman", "thor", "ironman", "antman", "Dr Strangeman"]
// console.log(marvel_heroes)
// console.log(marvel_heroes.slice(1,3))
// console.log(marvel_heroes.slice(1))
// console.log(marvel_heroes.slice())

//splice:
//let arr = [1,2,3,4,5,6,7];
// arr.splice(2,2,101,102);
// console.log(arr);

//add
// arr.splice(2,0,101)
// console.log(arr)

//delete
// arr.splice(3,1)
// console.log(arr)

//replace:
// arr.splice(3,1,101);
// console.log(arr)

//let companies = ["Bllomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// companies.shift()
// console.log(companies)

// companies.splice(2, 1, "Ola")
// console.log(companies)

// companies.push("Amazon")
// console.log(companies)








