function preload(){
}

function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    Image(video, 230, 150, 220, 200);
    fill(255,0,0);
    storke(255, 0, 0);
    circle(50, 430, 80);
    circle(50, 430, 80);
    circle(590, 50, 80);

    fill(0,128,0);
    storke(0, 128, 0);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);
    rect(40, 90, 20, 300);
    rect(580, 90, 20, 300);
}

function take_snapshot(){
    save('Mukund.png');
}