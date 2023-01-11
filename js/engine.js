document.addEventListener('visibilitychange', function (event) {
  if (document.hidden && !$("in_out").classList.contains("game_over")) {
    youLose();
  }
});

window.addEventListener('blur', function (event) {
  if(!$("in_out").classList.contains("game_over")) {
    youLose();
  }
});

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
questionsHashtable.putQuestion(4, "git grep - te permite buscar frases y palabaras especificas en los commits.", true);
questionsHashtable.putQuestion(5, "El sistema binario, usado hoy para la programación de ordenadores, fue inventado hace más de 300 años por Gottfried W. Leibnitz.", true);
questionsHashtable.putQuestion(6, "Las ramas hotfix derivan y se integran a la rama Master.", true);
questionsHashtable.putQuestion(7, "Gitflow es un sistema de control de versiones.", false);
questionsHashtable.putQuestion(8, "En un byte hay 8 bits.", true);
questionsHashtable.putQuestion(9, "Es posible descargar memoria ram desde la Microsoft Store.", false);
questionsHashtable.putQuestion(10, "El lenguaje Java fue desarrollado en sus inicios por Ryan Gosling, en el año 1991.", false);
questionsHashtable.putQuestion(11, "El logo de Java es un taza de té.", false);
questionsHashtable.putQuestion(12, "En enero del 2010, Sun Microsystems adquirió Oracle y todo su software, incluyendo Java Programming Languaje." , false );
questionsHashtable.putQuestion(13, "Gitlab fue creado por Linus Torvalds en 2011.", false);
questionsHashtable.putQuestion(14, "Un hypervínculo es una conexión directa entre dos espacios virtuales en el mundo digital.", true);
questionsHashtable.putQuestion(15, "Javascript es un lenguaje compilado." , false);
questionsHashtable.putQuestion(16, "Las etiquetas HTML le dan formato y estructura al contenido de las paginas web." , true);
questionsHashtable.putQuestion(17, "Es posible utilizar variables en CSS.", true);
questionsHashtable.putQuestion(18, "Integer es un objeto y no un dato primitivo.", true);
questionsHashtable.putQuestion(19, "'private, extends, finally' - Son palabras reservadas en JAVA." , true);
questionsHashtable.putQuestion(20, "Ada Lovelace es considerada la primera programadora de ordenadores." , true);
questionsHashtable.putQuestion(21, "La seríe Dinosaurios de 1991 termina cuando la familia se despide antes de caer un Asteroide.", true);
questionsHashtable.putQuestion(22, "Oliver Atom de los supercampeones despertó un día sin una pierna.", false);
questionsHashtable.putQuestion(23, "Los discos solidos tienen mejor desempeño que los discos liquidos.", false);
questionsHashtable.putQuestion(24, "La computadora de Coraje el perro cobarde fue inspirada en la película de Kubrick '2001: Odisea en el espacio'.", true);
questionsHashtable.putQuestion(25, "Un traje de astronauta cuesta USD 12.000.000 como mínimo.", true);
questionsHashtable.putQuestion(26, "En 1962 se detono una bomba de hidrógeno 100 veces más poderosa que la de hiroshima en el espacio.", true);
questionsHashtable.putQuestion(27, "Vicente Guerrero fué el primer presidente de México.", false);
questionsHashtable.putQuestion(28, "Alexander Fleming descubrió la penicilina.", true);
questionsHashtable.putQuestion(29, "La única letra que no está en la tabla periódica es la letra J.", true);
questionsHashtable.putQuestion(30, "Si multiplicamos 111111111 x 111111111 el resultado es 12345678987654321", true);
questionsHashtable.putQuestion(31, "Kamehameha era el nombre del rey de la isla hawaiiana.", true);
questionsHashtable.putQuestion(32, "La construcción de la torre Eiffel se completó el 31 de marzo de 1887.", false);
questionsHashtable.putQuestion(33, "Los relámpagos se ven antes de escucharse porque la luz viaja más rápido que el dinero." , false);
questionsHashtable.putQuestion(34, "El cráneo es el hueso más fuerte del cuerpo humano", false);                              
questionsHashtable.putQuestion(35, "Google inicialmente se llamaba BackRub.", true);
questionsHashtable.putQuestion(36, "Java inicialmente se llamaba Oak.", true);                               
questionsHashtable.putQuestion(37, "Si sumas los dos números en los lados opuestos de los dados, la respuesta siempre es 7.", true);                               
questionsHashtable.putQuestion(38, "Un pollo puede vivir sin cabeza mucho tiempo después de ser cortado.", true);                               
questionsHashtable.putQuestion(39, "El polimorfismo permite diseñar objetos para compartir comportamientos.", true);                               
questionsHashtable.putQuestion(40, "Jovenes construyendo el futuro nació por el exceso de jovenes competentes.", true);
questionsHashtable.putQuestion(41, "JSON significa Javascript Object Number.", false);       
questionsHashtable.putQuestion(42, "En javascript 'charAt()' te devuelve una cadena de texto invertida.", false);
questionsHashtable.putQuestion(43, "En javascript 'indexOf()' retorna el índice de la primera ocurrencia del valor dentro de un objeto String.", true);
questionsHashtable.putQuestion(44, "En javascript 'trim()' remueve los espacios en blanco al principio y al final de una string.", true);                              
questionsHashtable.putQuestion(45, "En javascript 'filter()' crea un nuevo array con los elementos que pasen el test de una función.", true);
questionsHashtable.putQuestion(46, "En git 'git pull' sirve para hacer merge de todos los cambios presentes en el repositorio remoto con el repositorio local.", true);                               
questionsHashtable.putQuestion(47, "En bash 'touch' sirve para crear nuevos archivos.", true);                               
questionsHashtable.putQuestion(48, "En bash 'mkdir' sirve para crear nuevos directorios.", true);                               
questionsHashtable.putQuestion(49, "En bash 'ls' sirve para visualizar los archivos en un directorio en especifico.", true);                               
questionsHashtable.putQuestion(50, "En java 'Public' es un modificador utilizado para definir el nivel de acceso en un programa.", true);
questionsHashtable.putQuestion(51, "En java 'Static' es una palabra reservada que permite la modificación de sus elementos en tiempos de ejecución.", false);           
questionsHashtable.putQuestion(52, "En java 'extends' sirve para heredar las propiedades de una clase.", true);
questionsHashtable.putQuestion(53, "En javascript 'console.log([] == false) - imprime un error'", false);
questionsHashtable.putQuestion(54, "En javascript 'console.log( ( 0.1 + 0.2 ) == 0.3 ) // imprime falso'", true);                              
questionsHashtable.putQuestion(55, "En html '<ol> <li><li> </ol>' crea una lista desordenada.", false);
questionsHashtable.putQuestion(56, "BBVA > BBienestar.", true);                               
questionsHashtable.putQuestion(57, "Albert Einstein dijo que la cuarta guerra mundial se lucharía con piedras.", true);                               
questionsHashtable.putQuestion(58, "El nitrógeno es el elemento químico más abundante en la atmósfera.", true);                               
questionsHashtable.putQuestion(59, "Marie Curie falleció de leucemia a causa de su contacto con sustancias radioactivas.", true);                               
questionsHashtable.putQuestion(60, "Titanic, Ben Hur y El Señor de los Anillos, el retorno del rey, son las películas con más Oscar de la historia.", true);
questionsHashtable.putQuestion(61, "La montaña sagrada (1973) es una pelicula de Alejandro Jodorowsky.", true);
questionsHashtable.putQuestion(62, "El cineasta Pedro Almodóvar es de origen chileno.", false);
questionsHashtable.putQuestion(63, "Amar te duele fue grabada en Iztapalapa.", false);
questionsHashtable.putQuestion(64, "Amores perros se estreno en el año 2000.", true);
questionsHashtable.putQuestion(65, "La persona más longeva registrada vivió 122 años y 164 días.", true);
questionsHashtable.putQuestion(66, "La persona más peuqeña de la historia medía 54,6cm.", true);
                               

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
let timeToRespond = 10;
let switchToRespondTimer = false;

$("lose").volume = 1;
$("plus").volume = 1;
$("uwu").volume = 1;
$("ambient").volume = 0.2;
$("hyperjump").volume = 1;
$("clock").volume = 0.5;

function setup(){
  var canvas = createCanvas(800,600);
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

setInterval(addNewObstacle,4000);
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
          timeToRespond = 11; 
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

