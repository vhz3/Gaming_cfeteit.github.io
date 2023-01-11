// document.addEventListener('visibilitychange', function (event) {
//   if (document.hidden && !$("in_out").classList.contains("game_over")) {
// youLose();
//   }
// });

// window.addEventListener('blur', function (event) {
//   if(!$("in_out").classList.contains("game_over")) {
//     youLose();
//   }
// });

function $(name){
  return document.getElementById(name);
}
////////////////////////////////////////////QUESTIONS//////////////////////////////////////////////
questionsHashtable = new HashTable();
let client_answer = "";
let lock = false;
const True_Button = document.querySelector(".true");
const False_Button = document.querySelector(".false");

questionsHashtable.putQuestion(0, "El intestino delgado mide unas tres veces y media la longitud de tu cuerpo.",true);
questionsHashtable.putQuestion(1, "Los plátanos son curvos porque crecen hacia el sol.",true);
questionsHashtable.putQuestion(2, "La caja negra de un avión es negra.",false);
questionsHashtable.putQuestion(3, "git stash - te permite descargar los cambios del repositorio remoto.",false);


$("in_out").children[0].addEventListener('click', (e) => {
  if($("in_out").classList.contains("game_over")){
    stop = false;
    $("in_out").classList.toggle("active");
    $("lose").currentTime = 0;
    $("lose").pause();
    $("ambient").currentTime = 0;
    $("ambient").play();
    restartGame();
    $("in_out").classList.remove("game_over");
  }else{
    $("in_out").classList.toggle("active");
    loop();
    $("ambient").play();
  }
});

True_Button.addEventListener('click', function(){
  client_answer = True_Button.innerHTML.toLowerCase();
  lock = true;
  if(lock){
    validateAnswer(questionsHashtable.getAnswer(questionsHashtable.getID($("question").innerHTML)));
  }
});

False_Button.addEventListener('click', function(){
  client_answer = False_Button.innerHTML.toLowerCase();
  lock = true;
  if(lock){
    validateAnswer(questionsHashtable.getAnswer(questionsHashtable.getID($("question").innerHTML)));
  }
});

function getRandomQuestion(lista){
    let randomID = Math.floor(Math.random()*lista.getLength());
    return lista.getQuestion(randomID);
}

function validateAnswer(correct_answer){
    if(client_answer == correct_answer.toString()){
      for(x of obs){
          x.setPosition(random(10,width-10),random(10,height-10));
      }
      $("uwu").play();
      $("ambient").play();
      $("questions_window").classList.remove("active");
      $("timer_window").classList.remove("active"); 
      switchToRespondTimer = false;
      stop = false;
      lock = false;
      loop();
    }else{
      youLose();
    }
}

///////////////////////////////////////////////GAME////////////////////////////////////////////////
window.addEventListener('load', ()=>{
  noLoop();
});

let obs = [];
let score = 0;
let stop = false;
let powerCount = 0;
let powerColor = 0;
let power = false;
let timeToRespond = 7;
let switchToRespondTimer = false;

$("lose").volume = 1;
$("plus").volume = 1;
$("uwu").volume = 1;
$("ambient").volume = 0.4;
$("hyperjump").volume = 1;
$("clock").volume = 0.7;

function setup(){
  var canvas = createCanvas(700,500);
  canvas.parent("game_window");
  obs.push(new obstacle(random(10,width-10),random(10,height-10),Math.floor(random(5,15))));
  player = new chronos(width/2,height/2,20);
  bonus = new zone(width/2,height/2);
  frameRate(75);
}

function draw(){
  background(255,75);
  addPlayer();
  addObstacles();
  checkCollision();
  addBonusZone();
  addBonusToScore();
  activateThePower(-1.1,0.9);
  updatePowerCount();
  onStop();
}

function addPlayer(){
  player.display(color(0,255,0));
  player.setPosition(mouseX,mouseY);
  player.checkBound();
}

function addObstacles(){
  for(let x of obs){
    x.display(color(0));
    x.move();
    x.checkBound();
  }
}

function addBonusZone(){
  bonus.display(color(180),75);
}

setInterval(addNewObstacle,3500);
function addNewObstacle(){
  // new_Obs.play();
  if(!stop && $("in_out").classList.contains("active")){
    obs.push(new obstacle(random(10,width-10),random(10,height-10),Math.floor(random(5,15))));
  }
}

setInterval(updateBonusPosition,10000);
function updateBonusPosition(){
   bonus.setPosition(random(100,width-100),random(100,height-100));
}

function addBonusToScore(){
  if(player.getPosition().dist(bonus.getPosition()) < bonus.getDiameter()/2 + player.getDiameter()/2){
    $("plus").play();
    $("score_window").style.color = "green";
    $("score_window").style.fontSize = "3.5rem";
    let onPoint = Math.sin(frameCount*0.05)*bonus.getDiameter() +10;
    bonus.display(color(67,0,255),onPoint);
    score += 0.2;
    if(powerCount < 100){
      powerCount += 0.07;
      powerColor = Math.trunc(powerCount * 2.55);
    }
  }else{
    $("plus").pause();
    $("plus").currentTime = 0;
    $("score_window").style.color = "red";
    $("score_window").style.fontSize = "2rem";
  }
}

function checkCollision(question){
  for(let x of obs){
      if(player.getPosition().dist(x.getPosition()) < x.getDiameter()/2 + player.getDiameter()/3 && power == false){
          let randomID = Math.floor(Math.random()*questionsHashtable.getLength());
          $("question").innerHTML = questionsHashtable.getQuestion(randomID);
          $("questions_window").classList.toggle('active');
          stop = true;
          timeToRespond = 8; 
          switchToRespondTimer = true;
          $("timer_window").classList.add("active");       
      }
  }
}

setInterval(()=>{
  if(switchToRespondTimer){
    if(timeToRespond != 0){
      timeToRespond -= 1;
      if(timeToRespond == 0){
        $("winError").classList.add("active");
        $("clockEnd").play();
        setTimeout(() => {
          youLose();
          $("winError").classList.remove("active");
        }, 2000);
      }else{
        $("clock").play();
      }
    } 
  
    $("timer_window").children[0].innerHTML = timeToRespond;
  }
},1000);


function onStop(){
  if(stop){
    noLoop();
    $("ambient").pause();
    $("plus").pause();
  }else{
    $("score_window").innerHTML = Math.floor(score);
  }
}

function restartGame(){
  obs.length = 1;
  bonus.setPosition(width/2,height/2);
  score = 0;
  powerCount = 0;
  $("power_count").style.height = "0%";
  power = false;
  loop();
}

function youLose(){
  $("lose").play();
  $("in_out").children[0].innerHTML = "!GAME OVER! <br>" + "Score: " + Math.floor(score);
  $("in_out").classList.toggle("active");
  $("in_out").classList.add("game_over");
  $("questions_window").classList.remove("active");
  $("timer_window").classList.remove("active"); 
  switchToRespondTimer = false;
  stop = true;
  lock = false;
  restartGame();
}

window.addEventListener('keydown', (e)=>{
  if(e.code == 'Space')
    if(!stop && powerCount >= 20){ 
      $("hyperjump").play();
      powerCount -= 20;
      powerColor -= 20;
      score -= 35;
      frameCount = 0;
      power = true;
      setTimeout(() => {
        power = false;
      },750);
    }
});

function updatePowerCount(){
  $("power_count").innerHTML = Math.trunc(powerCount);
  $("power_count").style.height = (4+powerCount/1.05 + "%");
  $("power_count").style.border = "1px solid rgba(" + (255-powerColor) + "," + powerColor + ",0)";
  $("power_bar").style.border = "1px solid rgba(" + (255-powerColor) + "," + powerColor + ",0)";
}

function activateThePower(near, away){
  if(power){
    $("game_window").style.filter = "invert(100%)";
    let powerExpansion = Math.sin(frameCount*0.1)*player.getDiameter()*5;
    push();
    stroke(255,0,100);
    noFill();
    circle(player.getPosition().x,player.getPosition().y, powerExpansion);
    pop();

    for(let i = 0; i < obs.length; i++){
      if(player.getPosition().dist(obs[i].getPosition()) <= powerExpansion){
        obs[i].powerReaction(near);
      }else{
        obs[i].powerReaction(away);
      }
    }
  }else{
    $("game_window").style.filter = "invert(0%)";
  }
}

