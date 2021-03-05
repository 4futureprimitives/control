var song;
var sliderRate;
var sliderVolume;


function setup() {
    canvas = createCanvas(200, 200);
   song = loadSound("au/avail.mp3", loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    sliderRate = createSlider(0, 3, 0.5, 0.01);//rate modulation
    slider = createSlider(0, 1, 0.5, 0.01);//volume
    slider.position(20,20); 
    fill('white');
    //Move canvas inside <div id="sketch-holder">
    canvas.parent('sketch-holder');
    sliderRate.parent('sketch-holder2');
    slider.parent('sketch-holder3');
}

function togglePlaying() {
    if (!song.isPlaying()) {

        song.play();
        button.html("Stop");
    } else {
        song.stop();
        button.html("Play");
    }
}
function loaded() {
    console.log("loaded");
}

function draw() {
    background(51);
    text('tap to play', 40, 40);    
    song.setVolume(slider.value());
    song.rate(sliderRate.value());
}
