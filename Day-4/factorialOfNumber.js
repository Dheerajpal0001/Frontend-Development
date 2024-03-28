// console.log("hello world");
// console.log("loading please wait....");
// console.log("Code is looing nice👌");

let n = 5;
const factorial = (n)=>{
    let arr = Array.from(Array(n+1).keys());
    // console.log(arr.slice(1,));
    let c  = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    return c;
}
console.log(factorial(n));