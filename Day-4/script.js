/*alert("This website is not completed yet.");

var a = prompt("Enter any number:");
var isTrue = confirm("Are you sure you want ot leave this.")
if(isTrue){
    console.log("You are in danger.")
}
else{
    console.log("You are safe.")
}
console.log("Your number is: " + a)*/


// 
// var a = 5;   
// var b = 5;    //global variable
// var c = "Luffy"
// console.log(a+b)
// console.log(typeof c)
// console.log(typeof a, typeof b) 

// let l = 10;         //local variable
// {
//     let l =  15;
//     console.log(l)
// }                 
// console.log(l)


// let x = "LUFFY";
// let y = 33; 
// let z = 4.646969;
// let p = true;
// let q = undefined;
// let r = null; 
// console.log(x , y , z , p , q , r)
// console.log(typeof x ,typeof  y ,typeof  z ,typeof  p ,typeof  q ,typeof  r);


let obj = {
    name:  "Naruto",
    rollNo: 21,  
    age: 20   ,
    ishansome: true
};
obj.salary = "1 lack";
console.log(obj);



let age = 5;
let diff = 2; 
console.log(age % diff);
if((age**diff) > 18){
    console.log("YOu can drive");
}
else{
    console.log("You cannot drive");
}

let ope = age>diff? (age+diff) : (age-diff);
console.log(ope);


let obj2 = {
    name: "Nauto", 
    role: "coder",
    company: "tempMart"
}

for (const key in obj2) {
    // if (Object.hasOwnProperty.call(object, key)) {
        const element = obj2[key];
        console.log(key,element);
        
    // }
}

for (const c of "Naruto") {
    console.log(c);
}


// functions

function fun(name){
    console.log("Hey " + name + " you are looing gorgeous.");

    console.log("hey " + name + " you looks beautiful sometimes.");
}
fun("Nauto");
fun("Zoro");

// normal function
function sum(a,b){
    // console.log(a+b);
    return a+b;
}
sum(3,5);
result = sum(10,10);
console.log("sum of 2 no. is: "+ sum(5,5));
console.log(result);

// arrow function
const func1 = (x)=>{
    console.log("I am an arrow function "+x);
}
func1(26);
func1(44);


// String
let a = "naruto";
for(let i=0; i<a.length; i++){
    console.log(a[i]);
}
console.log(a.length);

let name1 = "Naruto";
let friend = "sasuke";
console.log("His name is "+ name1 + " and his friends name is " + friend);

// string interpolation
console.log(`His name is ${name1} and his friend's name is ${friend}`);

console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.length);


console.log(name1.slice(1,4));
console.log(name1.slice(1,5));
console.log(name1.slice(1));


console.log(friend.replace("s","23"))

console.log(name1.concat(" Ussumaki"));
let modify = "    name1   ";
console.log(modify.trim());

console.log(name1.indexOf("ru"));
console.log(name1.charAt(4));



let arr = [1,2,3,4,5,6,7,8];
console.log(arr);
console.log(arr.length, typeof arr);
console.log(arr.toString());
console.log(arr.join(" and "));

// pop is used to remove the element from the end.
console.log("Pop")
arr.pop();
console.log(arr);

// push is used to push element in the array from the end.
console.log("Push")
arr.push("Sasuke");
console.log(arr);

// shift is used to pop from the start of the array.
console.log("Shift")
console.log(arr.shift());
console.log(arr);


// unshift is used to push from start of the array.
console.log("Unshift")
console.log(arr.unshift("Naruto"));
console.log(arr);

console.log("Delete")
delete(arr[5]);
console.log(arr);

console.log("Concatenation")
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];
console.log(a1.concat(a2,a3));
console.log(a1.concat(a2));
console.log(a1);
console.log(a2);
console.log(a3);

console.log("Splice")
let num = [1,2,3,5,5,6,7,8,9];
console.log(num.splice(1,5));
console.log(num);

console.log("Map function");
let array = [1,13,5,7,11];
let newarray = [];
// for(let index=0; index<array.length; index++){
//     const ele = array[index];
//     newarray.push(ele**2);
// }
// console.log(newarray);
let newarr = array.map((e,index,array)=>{
    console.log(e);
    return e*e;
})
console.log(newarr);

console.log("Filter");
const greaterThanSeven = (e)=>{
    if(e>7){
        return true;
    }else{
        return false;
    }
}
console.log(array);
console.log(array.filter(greaterThanSeven));


console.log("Reduce");
let array2 = [1,2,3,5,4];
const red =(a,b)=>{
    return a+b;
}
console.log(array2);
console.log(array2.reduce(red));


console.log("Array.from");
console.log(Array.from("Naruto"));





