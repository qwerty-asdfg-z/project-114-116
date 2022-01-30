noseX=0;
noseY=0;
moustache=""
function preload(){
    moustache=loadImage("https://i.postimg.cc/QtFGRRkY/imgbin-movember-moustache-mustache-csiz-Q6q-WQdd-NQZkt-PKPVuds-Dq-removebg-preview.png")
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(600,200);
   video=createCapture(VIDEO)
    video.size(300,300);
    video.hide();
   
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log('PoseNet is initialised')
}
function draw(){
image(video,0,0,300,300);
   image(moustache,noseX-35,noseY,80,50) 
    
}
function takeSnapshot(){
    save("filter.jpg")
}
function gotPoses(results){
    if (results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x ="+noseX);
        console.log("nose y ="+noseY);
    }
}
