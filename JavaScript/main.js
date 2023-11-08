//Definierar diverse element som variabler
const gameDevice = document.getElementById("gameDevice");
const startStop = document.getElementById("startStop");
const pad0 = document.getElementById("pad0");
const pad1 = document.getElementById("pad1");
const pad2 = document.getElementById("pad2");
const pad3 = document.getElementById("pad3");
const pads = document.querySelectorAll(".pad");
const padsVar = [pad0, pad1, pad2, pad3];

//Variabel som deklarerar om spelet är igång eller ej
let gameOver = true;

//Array att samla en ny sekvens i
let sequence = [];

//Funktion för att skapa och köra sekvensen
let start = () => {
    //Deklarerar att spelet har startat
    gameOver = false;

    //Genererar random int 0-4
    sequence.push(Math.floor(Math.random()*4));

    //Loopar igenom sekvens arrayen
    sequence.forEach((element, i)=>{
        //Sätter en interval på 1200ms mellan varje iteration
        setTimeout(() => {
            //Lägger till och tar bort klasser för att grafiskt visa sekvensen för användaren
            if(element === 0){
                pad0.classList.add("active");
                setTimeout(()=>{
                    pad0.classList.remove("active"); 
                }, 1200)
            }
    
            if(element === 1){
                pad1.classList.add("active");
                setTimeout(()=>{
                    pad1.classList.remove("active"); 
                }, 1200)
            }
    
            if(element === 2){
                pad2.classList.add("active");
                setTimeout(()=>{
                    pad2.classList.remove("active"); 
                }, 1200)
            }
    
            if(element === 3){
                pad3.classList.add("active");
                setTimeout(()=>{
                    pad3.classList.remove("active"); 
                }, 1200)
            }
          }, i * 2000);
    })
}


//click event för att starta spelet   
startStop.addEventListener("click", ()=> {
    if(gameOver = true){
        sequence = [];
        start();
    }
})

//Skapa ljud

//Click matchning

//Array för att samla användarens click
let userSequence = [];

padsVar.forEach((el)=>{
    el.addEventListener("click", ()=>{
        if(el===pad0){
            userSequence.push(0);
        }
        if(el===pad1){
            userSequence.push(1);
        }
        if(el===pad2){
            userSequence.push(2);
        }
        if(el===pad3){
            userSequence.push(3);
        }

        if(JSON.stringify(sequence) !== JSON.stringify(userSequence)){
            gameOver = true;
            //ALERT LOSS
            //make modal
        }
    })
})