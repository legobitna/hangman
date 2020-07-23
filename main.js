let randomNumber = Math.floor(Math.random()*100+1)
frame1 = function() {
    draw (0, 150, 150, 150);
  };
  
  frame2 = function() {
    draw (10, 0, 10, 600);
  };
 
  frame3 = function() {
    draw (0, 5, 70, 5);
  };
 
  frame4 = function() {
    draw (60, 5, 60, 15);
  };
 
  torso = function() {
    draw (60, 36, 60, 70);
  };
 
  rightArm = function() {
    draw (60, 46, 100, 50);
  };
 
  leftArm = function() {
    draw (60, 46, 20, 50);
  };
 
  rightLeg = function() {
    draw (60, 70, 100, 100);
  };
 
  leftLeg = function() {
    draw (60, 70, 20, 100);
  };

  head = function(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
  }
  

let drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 
console.log("Rr",randomNumber)
let count = 9
function guess(){
    let userInput = document.getElementById("guessArea").value
    
    if(userInput<randomNumber){
        result ="too small"
        
        drawHackman()
        count --
    }else if(userInput>randomNumber){
        result="too big"
        
        drawHackman()
        count-- 
    }else{
        result="correct"

    }
    document.getElementById("resultArea").innerHTML=result
}

function drawHackman(){
    drawArray[count]()
   
}


  
 
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

canvas =  function(){
  
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#4287f5";
    context.lineWidth = 2;
  };
  canvas();