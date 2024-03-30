var rand = 0;

function makeBubble(){
    let n = prompt("Enter the number: ");   
    // let div = document.querySelector('.bubbles');
    // for(let i = 0; i <= num; i++){
        //     let ran = Math.floor(Math.random()*num+1);
        //     let a = document.createElement('p');
        //     a.innerHTML = ran;
        //     a.className = 'b';
        
        //     // console.log("hello")
        //     div.appendChild(a);
        // }
        

                if(n < 100){
                    num = n;
                   }else{   
                    num = 150;
                }


        var bub = "";
        let numbers = Array.from({ length: num}, (_, i) => i + 1);
        numbers.sort(() => Math.random() - 0.5);
        for(let i =0; i<num; i++){
            bub += `<p class="b">${numbers[i]}</p>`;
            // let ran = Math.floor(Math.random()*num+1);
        }
        // console.log(bub);   
        let aab = document.querySelector('.bubbles');
        aab.innerHTML = bub;
    }
    
    
function hits(){
    rand = Math.floor(Math.random()*num+1);
    let hi= document.querySelector('.hi');
    hi.innerHTML = rand;
    // console.log(rand);
}


var time = 60;
function timer(){
    let timer = setInterval(function(){
        if(time > 0){
            time--;
            document.querySelector('.ti').textContent = time;
        }
        else{

            alert(`Game Over and Score: ${score}`);
            clearInterval(timer);
            document.querySelector('.bubbles').innerHTML = "";
            
            // let str = confirm("Start a new Game?");
            // if(str = true){
            // }else{
            //     console.log("Don't want to play game");

            // }
        }
        },1000);
    }
    
    var score = 0;
    function sco() {
        score += 10;
        document.querySelector('.si').textContent = score;
    }
    document.querySelector('.bubbles').addEventListener('click', function(e){
        var clicNum = (Number(e.target.textContent));
        console.log("clickNUm " + Number(e.target.textContent));
    console.log("rand:" + rand);
    if(rand == clicNum){
        sco();
        hits();
    }else{
        // alert(`Game Over and Score: ${score}`);
        clearInterval(timer);
        document.querySelector('.bubbles').innerHTML = "";
        
        // makeBubble();
        time = 0;  
        // score = 0; 
    }
})



makeBubble();
hits();
timer();