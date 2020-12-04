var canvas
var button
function setup(){
    canvas=createCanvas(400,400)
button=createSprite(200,200,20,20)
   }
function draw(){
    background("white")
    text ("hi",200,200)
 addEventListener('touchstart',f)
 if(mousePressedOver(button)){
    button.shapeColor="green"
 }
// addEventListener('touchend',f)
//addEventListener('keypress',function1())
// addEventListener('click',msg)
// //addEventListener('keydown',msg2())
drawSprites();
}

function function1(){
    var multi=10*12
    text ("multiplication is =",200,300)
    // console.log("key is been pressed");
    // alert("key pressed")
}

function newf(e){
    if(e.clientX>180 && e.clientX<220){
        button.shapeColor="green"
    }
}

function msg2(){
  
    alert("a is pressed")
}
function msg(){
    alert("hi")
}
function f(ev){

    console.log(ev.pageX)
    console.log(ev.touches[0].Touch.clientX)
}