var newWidth=100;
var newHeight=50;

//setup function executes once
function setup(){
    createCanvas(600,400);
    background(50);
    
    
}

function draw(){
    //background(50)
    if(mouseIsPressed){
    noStroke();
    fill(150,0,255,100);
    ellipse(mouseX,mouseY,newWidth,newHeight);
    fill(150,0,250);
    }
}