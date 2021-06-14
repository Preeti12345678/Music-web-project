var butter="";
var on_the_ground="";
function preload(){
    butter=loadSound("butter.mp3");
    on_the_ground=loadSound("on the ground.mp3");
}
function setup(){
    canvas=createCanvas(400,300);
    canvas.position(500,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,400,300);
}
function play(){
    butter.play();
}