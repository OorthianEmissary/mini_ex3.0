var conM = 1;
var ballSize = 0.1;
var ballSizeInc = 0.3;
var notFrozen = random("Not Frozen., Not Frozen.., Not Frozen...");


function setup() {
createCanvas(windowWidth, windowHeight);
    frameRate(20);
    console.log("Hello World");
}

function draw() {
    background(0);
    conM = conM + 0.1;
    
    push();
    translate(windowWidth/2, windowHeight/2);
    rotate(PI/3.0 + conM);
    
    //rect
    fill(random(255), random(255), random(255));
    rectMode(CENTER);
    rect(0, 0, 100, 100, 20);
    
    //ball
    fill(random(255), random(255), random(255));
    ellipse(0, 0, 20, 20);
    
    pop();

    textAlign(CENTER);
    fill(255);
    text("Not Frozen...", windowWidth/2, windowHeight/2 + 100);

}

function resizeCanvas() {
    windowResized();
    }