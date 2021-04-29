//1. Declare some variables
let  sound, amplitude;
var sliderRate;
var slider;
let x = 30;//point value
let y = 100;// point value

//2. Load a sample
function preload(){
    sound = loadSound('au/leviathan.mp3');
}

//3. Setup + website positioning
function setup() {
    let cnv = createCanvas(300, 300);
    cnv.mouseClicked(toggleSound);
    amplitude= new p5.Amplitude();
    sliderRate = createSlider(0, 1, 1, 0.01);//rate modulation
    slider = createSlider(0, 1, 0.5, 0.01);//volume
    // slider.position(20,20);
 

    //Move canvas inside div id="sketch-holder"//
    
    cnv.parent('sketch-holder');
    sliderRate.parent('sketch-holder2');
    slider.parent('sketch-holder3');
}

//4. Animation
function draw() {

    background(255);

//    text('tap to play, tap to stop', 90, 90);    
  //  strokeWeight(1)
    
    sound.setVolume(slider.value());
    sound.rate(sliderRate.value());
    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 50, 600);
    stroke(sliderRate.value());
    fill(sliderRate.value(), 50);

    //Speakers
    noFill();
    ellipse(width/2, height/4, size*1.5, size*1.5);
    ellipse(width/2, height/4+100, size*1.5, size*1.5);
    //rect(x, y, w, h)
    let size2 = map(level, 0, 1, 3, 500);
    let margin = 20;
    let color1 = map(level, 0, 1, 100, 255);
    //Cabinet/Inner circle
    stroke(0); // Change the color
    fill(level, 50);
    circle(width/2, height/4,size);
    circle(width/2, height/4+100,size);

    strokeWeight(1);
    noFill();
    rect(20, 0, width-margin-margin, height-margin - margin);
    stroke(0, 50);
    line(20, width/2-20, width-margin, height/2-20);


}

//5. Mouse function 
function toggleSound() {
    if (sound.isPlaying() ){
        sound.stop();
    } else {
        sound.play();  
    }
}
