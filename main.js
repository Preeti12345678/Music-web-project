var butter="";
var on_the_ground="";
var leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
    butter=loadSound("butter.mp3");
    on_the_ground=loadSound("on the ground.mp3");
}
function setup(){
    canvas=createCanvas(400,300);
    canvas.position(500,250);
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotposes);
}
function draw(){
    image(video,0,0,400,300);
}
function play(){
    butter.play();
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("Left Wrist x= "+leftWristX+"  Right Wrist y= "+leftWristY);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Right Wrist x= "+rightWristX+"  Right Wrist y= "+rightWristY);
    }
}