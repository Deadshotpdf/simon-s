function generateRandom(){
    let w=Math.random();
    w= Math.floor(w=(w*4));
    return w;
}
let level=0;
function blink(button){

    
    let orignal=button.style.backgroundColor;
    button.style.backgroundColor="white";
   let id= setInterval(()=>{
        button.style.backgroundColor=orignal;
    },110);
    setTimeout(()=>{
        clearInterval(id);
    },102);
   return;


}

    let start=false;
    let sequence=[generateRandom()];
    let obj=document.querySelector("body");
    let h2=document.querySelector("h2");
    let btn=document.querySelectorAll(".btn");

    function begin(){ obj.addEventListener("click",()=>{
         
        if(start==false){
            level++;
        h2.innerText="Level 1";
       blink( btn[sequence[0]]);
       start=true;
        }

    });
    }
    begin();

   function check(pressed,sequence){
     
        for(let i=0;i<pressed.length;i++){
            if(pressed[i]!=sequence[i]){
                
                gameOver();
                return;
            }
        }
      let id=setInterval(nextLevel,1000);

      setInterval(()=>{
        clearInterval(id);
      },1002);


     
    }
  
    let score=1;
    let arr=["pink","blue","yellow","red"];
    let pressed=[];
    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener("click",()=>{
           if(btn[i].classList.contains("red")){
               blink(btn[i]);
               let x=3
              pressed.push(x);
            }
            else if(btn[i].classList.contains("blue")){
                
                blink(btn[i]);

               let x=1
               pressed.push(x);
            }
            else if(btn[i].classList.contains("orange")){
                blink(btn[i]);
                let x=2
                pressed.push(x);
            }
            else
            {
                blink(btn[i]);
               let x=0;
               pressed.push(x);
            }
            if(sequence.length==pressed.length)
            check(pressed,sequence);
        })
    }

    function gameOver(){
        h2.innerText="Game Over Your Score is "+score;
        let body=document.querySelector(".outer");
        body.style.backgroundColor="red";

        let b=document.querySelector("body");
        b.style.backgroundColor="red";
       let id= setInterval(()=>{
            body.style.backgroundColor="white";
            b.style.backgroundColor="white";
        },500);

        setTimeout(()=>{
            clearInterval(id);
        },501);
       
    }

    
    function nextLevel(){
        score++;
        level++;
       h2.innerText="Level "+level;
       pressed=[];
       let w=generateRandom();
       sequence.push(w);
       
       blink(btn[w]);
       
        
        
        
    }
    

    







