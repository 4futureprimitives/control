var angle = .5;
var offset = 400;
var scalar = 265;
var speed = .05;
var r;
var g;
var b;
var a;


function setup() {

createCanvas(800, 800);
background(204);
}

function draw() {
    r = random(100, 255);
    g = random(100, 200);
    b = random(150, 255);
    a = random(200, 255);
    
    var x = offset + cos(angle * .45) * random(scalar);
var y = offset + sin(angle/.05) * scalar;
    fill(r, g, b, 3); 
    ellipse(x, y, random(0,20), random(0, 90));
    angle += speed;
}
