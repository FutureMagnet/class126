song = "";
scoreLeftWrist ="0";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
    song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 500, 500);

    fill("#FF4324");
    stroke("#FF4324");

    circle(leftWristX, leftWristY, 20)
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY)
    volume = remove_decimals/500;
    document.getElementById("volume").innerHTML = "Volume = " + volume;
    song.setVolume(volume);

}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY ="+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX ="+ rightWristX +" rightWristY"+ rightWristY)
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1)
}