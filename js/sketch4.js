//LOMO-Kino P5 Sketch

//Apichatpong Weerasethakul's short film "Ashes" plays somewhere 4 frames per second. Although our eyes must work a bit harder, given the illusion of motion is thwarted by the reduction of frames, we are also--like the theme of the film--drawn toward spectacular anchors upon which to make sense of the film. 

let s = 'Apichatpong Weerasethakul’s short film “Ashes” (2012, 20min.)  is a project conceived to test the limits of Mubi’s LomoKino film camera, an analog contraption designed to recapture the imperfect and abrasive beauty of cinema. A film would consist of many diversions and reels, at 3-5 frames per second on a single roll of 144 movie frames. The film is also a perfect example of a documentary aesthetics where body and part are registered in the playful arrangements between the visual and the aural. It plays as a critique of the corporeal experience of politics and everyday life in a succession of events, circulatory references, and landscape sonification, where time is a condition of documentation. The film begins and returns to a POV shot of Apichatpong’s boyfriend walking their dog at home in the northern countryside and ends with a burning funeral pyre at a nearby Buddhist temple. But strong references to the repression of political dissidence attenuates the resistant aesthetics of the film. By the end, the viewer has been transported to the high resolution of a digital camera, and away from the LomoKino altogether.';

let cnv;
let fr = 10;
var  img;

function preload() {
  img = loadImage("../img/112.png");
 }

function setup() {

    frameRate(fr); 
    cnv = createCanvas(1000, 700);

}

function draw() {

  //  background(110);            
fill(255);

//    image(img, 100,100);

 text(s.slice(random(500), random(500, 1000)), random(500), random(500, 100), random(400), random(400)); // Text wraps within text box
    image(img, 0, random(10000) * -1);
}
