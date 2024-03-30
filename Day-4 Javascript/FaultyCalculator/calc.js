const rand = Math.floor( Math.random()*100) + 1;
console.log(rand);
let a1 = Number(prompt("Enter number 1: "));
let a2 = Number(prompt("Enter number 2: "));
let op = prompt("Enter operator: ");

if(rand > 10){
    if(op == "+"){
        console.log("The ans is: " + a1+a2);
        alert(`The result is: ${a1 + a2}`);
    }
    else if(op == "-"){
        console.log("The ans is: " + a1-a2);
        alert(`The result is: ${a1 - a2}`);
    }
    else if(op == "*"){
        console.log("The ans is: " + a1*a2);
        alert(`The result is: ${a1 * a2}`);
    }
    else if(op == "/"){
        console.log("The ans is: " + a1/a2);
        alert(`The result is: ${a1 / a2}`);
    }
}
else{
    if(op == "+"){
        console.log("The ans is: " + a1-a2);
        alert(`The result is: ${a1 + a2}`);
    }
    else if(op == "*"){
        console.log("The ans is: " + a1+a2);
        alert(`The result is: ${a1 - a2}`);
    }
    else if(op == "-"){
        console.log("The ans is: " + a1/a2);
        alert(`The result is: ${a1 / a2}`);
    }
    else if(op == "/"){
        console.log("The ans is: " + a1**a2);
        alert(`The result is: ${a1 * a2}`);
    }
}


// let random = Math.random();
// let random = Math.floor( Math.random()*100) + 1;
// console.log(random);
// let a1 =Number(prompt("Enter number 1: "));
// let a2 = Number(prompt("Enter number 2: "));
// let op = prompt("Enter operator: ");

// let obj = {
//     "+": "-",
//     "*": "+",
//     "/": "**",
//     "*": "/"
// }

// if(random > 10){
//     console.log(`The result is ${a1} ${op} ${a2}`);
//     alert(`The result is ${eval(`${a1} ${op} ${a2}`)}`)
// }
// else{
//     op = obj[op];
//     alert(`The result is ${eval(`${a1} ${op} ${a2}`)}`)
// }


