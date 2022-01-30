function setup(){
    canvas= createCanvas(500, 400);
    canvas.position(500, 300);
    video= createCapture(VIDEO); 
    video.hide(); 


}
music1=""; 
music2="";

function draw(){
    image(video, 0,0, 500, 400); 
}

function preload(){
   music1.loadSound(music.mp3);
   music2= loadSound(Rarin_YESSIR_.mp3); 
}
