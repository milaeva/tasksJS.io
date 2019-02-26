let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=1; i<101; i++) {
  let excel = document.createElement('div');
  field.appendChild(excel);
  excel.classList.add('excel');
}
let excel = document.getElementsByClassName('excel');
let x = 1;
    y = 10;

for (let i=0; i<excel.length; i++){
  if (x>10){
    x=1;
    y--;
  }
  excel[i].setAttribute('posX', x);
  excel[i].setAttribute('posY', y);
  x++;

}

function generateSnake(){
  let posX = Math.round(Math.random() * (10-3) + 3);
  let posY = Math.round(Math.random() * (10-1) + 1);
  return [posX, posY];
}
let coordinates = generateSnake();
let snakeBody = [document.querySelector('[posX = "' + coordinates[0] +'"][posY = "' + coordinates[1]+ '"]'), document.querySelector('[posX = "' + (coordinates[0]-1) +'"][posY = "' + coordinates[1]+ '"]'), document.querySelector('[posX = "' + (coordinates[0]-2) +'"][posY = "' + coordinates[1]+ '"]')];

for (let i = 0; i<snakeBody.length; i++){
  snakeBody[i].classList.add('snakeBody');
}

snakeBody[0].classList.add('head');

let mouse;
function createMouse() {
  function generateMouse() {
    let posX = Math.round(Math.random() * (10-3) + 3);
    let posY = Math.round(Math.random() * (10-1) + 1);
    return [posX, posY];
  }

  let mouseCoordinates = generateMouse();
  console.log(mouseCoordinates);
  mouse = document.querySelector('[posX = "' + mouseCoordinates[0] +'"][posY = "' + mouseCoordinates[1]+ '"]') ;

  while(mouse.classList.contains('snakeBody')){
    let mouseCoordinates = generateMouse();
    mouse = document.querySelector('[posX = "' + mouseCoordinates[0] +'"][posY = "' + mouseCoordinates[1]+ '"]') ;
  }

  mouse.classList.add('mouse');
}

createMouse();

function move() {
  let snakeCoordinates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
  snakeBody[0].classList.remove('head');
  snakeBody[snakeBody.length-1].classList.remove('snakeBody');
  snakeBody.pop();

  if(snakeCoordinates[0] < 10){
    snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoordinates[0] +1) +'"][posY = "' + snakeCoordinates[1]+ '"]'));
}else {
  snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordinates[1]+ '"]'));
}
  snakeBody[0].classList.add('head');

  for (let i = 0; i<snakeBody.length; i++){
    snakeBody[i].classList.add('snakeBody');
  }
}
let interval = setInterval(move, 300);
