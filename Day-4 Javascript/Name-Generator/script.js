// Buisness Name Generator

let obj1={
    1: "Crazy",
    2: "Amazing",
    3: "Fire",
}
let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments",
}
let obj3={
    1: "AnotherWord",
    2: "Bros",
    3: "Limited",
    4: "Hub"
}


let a = Math.floor(Math.random()*3) + 1;
let b = Math.floor(Math.random()*3) + 1;
let c = Math.floor(Math.random()*3) + 1;

function nameGenerate(){
    confirm("You Want to Generate a Name?");
    if(confirm = true){
        // var d = document.createElement("p");
        let box = document.querySelector('.box');
        // // console.log(obj1[a] + " " + obj2[b] + " "+ obj3[c]);  
        // e.appendChild(d);
        let newDiv = document.createElement('p');
        newDiv.className = 'n';
        // let boxDiv = document.querySelector('.box');
        newDiv.innerHTML = "Name => " + obj1[a] + " " + obj2[b] + " "+ obj3[c];  
        box.appendChild(newDiv);
    }
}





