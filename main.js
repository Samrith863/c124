noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function preload(){

}
function setup(){
    video=createCapture(VIDEO);
  video.size(550,550);
canvas=createCanvas(550,500);
canvas.position(650,100);
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}
function draw(){
background("#00ccff");
document.getElementById("square_length").innerHTML="length of the side-"+difference+"pixels";
fill("grey");
stroke("grey");
square(noseX,noseY,difference);
textSize(difference);
fill("red");
text("Samrith",50,400);
}
function modelloaded(){
    console.log("model is loaded");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("nose x ="+noseX+"nose y ="+noseY);
        console.log("left wrist x ="+leftWristX+"right wrist x ="+rightWristX);
        difference=floor(leftWristX-rightWristX);

    }
}
