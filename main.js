leftWristX=0;
rightWristX=0;
difference=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 100);

    canvas = createCanvas(550, 550);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('#6699CC');
    fill('##FFA500');
    stroke('#FFA500');
    document.getElementById("blah").innerHTML="Font size of the text will be = " + difference + "px";
    textSize(difference);
    text('Elliot', 50, 400);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}