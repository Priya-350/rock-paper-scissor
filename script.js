const choices=["rock","paper","scissor"];
const player=document.getElementById("player");
const computer=document.getElementById("computer");
const result1=document.getElementById("result1");
let pscore1=0;
let cscore1=0;
function play(playerchoice){
    const computerchoice=choices[Math.floor(Math.random()*3)];
   
    let result="";
    
    if(playerchoice===computerchoice){
        result="IT'S A TIE!";
    }
    else{
        switch(playerchoice){
            case 'rock':
                result=(computerchoice==='scissor')?"YOU WIN!":"YOU LOSE!";
                break;
                case 'paper':
                    result=(computerchoice==='rock')?"YOU WIN!":"YOU LOSE!";
                    break;   
                    case 'scissor':
                        result=(computerchoice==='paper')?"YOU WIN!":"YOU LOSE!";
                        break;    
        }
    }



  const pchoice=document.getElementById("pchoice");
  const cchoice=document.getElementById("cchoice");
  const pscore=document.getElementById("pscore");
  const cscore=document.getElementById("cscore");

  pchoice.textContent=`${playerchoice}`;
  cchoice.textContent=`${computerchoice}`;
   result1.textContent=result;

   result1.classList.remove("greentext","redtext");
   if(result=="YOU WIN!"){
    result1.classList.add("greentext");
    pscore1++;
   }
   else if(result=="YOU LOSE!"){
    result1.classList.add("redtext");
    cscore1++;
   }

   pscore.textContent=`${pscore1}`;
  cscore.textContent=`${cscore1}`;
}