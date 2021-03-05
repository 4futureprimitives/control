//1. Declare some variables
let  sound, amplitude;
var sliderRate;
var slider;

//2. Load a sample
function preload(){
    sound = loadSound('au/Ceremony.mp3');
}

//3. Setup + website positioning
function setup() {
    let cnv = createCanvas(300, 300);
    cnv.mouseClicked(toggleSound);
    amplitude= new p5.Amplitude();
    sliderRate = createSlider(0, 3, 1, 0.01);//rate modulation
    slider = createSlider(0, 1, 0.5, 0.01);//volume
    // slider.position(20,20);
 

    //Move canvas inside div id="sketch-holder"//
    
    cnv.parent('sketch-holder');
    sliderRate.parent('sketch-holder2');
    slider.parent('sketch-holder3');
}

//4. Animation
function draw() {
    text('tap to play, tap to stop', 90, 90);    
    background(145, 134, 165, 55);
    strokeWeight(2)
    sound.setVolume(slider.value());
    sound.rate(sliderRate.value());

    let level = amplitude.getLevel();
    let size = map(level, 0, 1, 0.1, 600);
    stroke(sliderRate.value(), 255, 105, 63);
    fill(sliderRate.value(), 55, 25, 127);
    rect(100, 100, size, size);
    
}

//5. Mouse function 
function toggleSound() {
    if (sound.isPlaying() ){
        sound.stop();
    } else {
        sound.play();  
    }
}
