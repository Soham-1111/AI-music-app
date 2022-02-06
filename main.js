function setup(){
    canvas= createCanvas(500, 400);
    canvas.position(500, 300);
    video= createCapture(VIDEO); 
    video.hide(); 

    poseNet= ml5.poseNet(video, modelLoaded); 
    poseNet.on("pose", gotResult);


}
music1=""; 
music2="";
leftWristX=0;
leftWristY=0;
rightWristX=0; 
rightWristY= 0;
leftWristkey=0;
rightWristkey=0;

function modelLoaded(){
    console.log("Model is successfully loaded!"); 
}

function draw(){
    image(video, 0,0, 500, 400); 
}

function preload(){
   music1=loadSound(music.mp3);
   music2= loadSound(Rarin_YESSIR_.mp3); 
}

function gotResult(results){
if(results.length > 0){
    console.log(results); 
   leftWristX= results[0].pose.leftWrist.x;
   leftWristY= results[0].pose.leftWrist.y;
   rightWristX= results[0].pose.rightWrist.x;
   rightWristY= results[0].pose.rightWrist.y;
   rightWristkey= results[0].pose.keypoints[10].score; 
   leftWristkey= results[0].pose.keypoints[9].score; 
   console.log("score for left wrist=" + leftWristkey);
   console.log("score for right wrist=" + rightWristkey); 
   
   
}

}


