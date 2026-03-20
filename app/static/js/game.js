let cnv;
let aspectRatio = 16/9;
const margin = convertRemToPixels(8);
let container = document.getElementById("main");
let balls = []
let cue;
let whiteBall;

function setup() 
{
    cnv = createCanvas((windowHeight - margin) * aspectRatio, windowHeight - margin);
    cnv.parent("canvas")
    cnv.position((windowWidth - width)/2,(windowHeight - height)/2, "inherit")

    container.width = (windowHeight - margin) * aspectRatio;
    container.height = windowHeight - margin;

    whiteBall = createVector(300, container.height/2, 60);

    // Balls
    for (let i = 0; i < 5; i += 1)
    {
        for(let j = 0; j <= i; j += 1)
        {
            balls.push(createVector(1000 + 55*i, container.height/2 + 31 * i - 62 * j, 60));
        }
    }
}

function draw() 
{
    background("#36594A");

    
    // Walls
    noStroke();    
    fill("#895129");
    rect(0, 0, 40, container.height);
    rect(container.width - 40, 0, 40, container.height);
    rect(0, 0, container.width, 40);
    rect(0, container.height - 40, container.width, 40);
    
    // Corners
    fill(0);
    circle(60,60,80)
    circle(container.width/2,60,80)
    circle(60,container.height - 60,80)
    circle(container.width/2,container.height - 60,80)
    circle(container.width-60, 60, 80)
    circle(container.width-60, container.height - 60, 80)

    // White ball
    fill(255);
    circle(whiteBall.x, whiteBall.y, whiteBall.z);
    
    for (let i = 0; i < balls.length; i += 1)
    {
        circle(balls[i].x, balls[i].y, balls[i].z)
    }
}

function windowResized() 
{
    let availableWidth = windowWidth - margin;
    let availableHeight = windowHeight - margin;

    let canvasWidth = availableWidth;
    let canvasHeight = canvasWidth / aspectRatio;

    // If height is too big, fit by height instead
    if (canvasHeight > availableHeight) 
    {
        canvasHeight = availableHeight;
        canvasWidth = canvasHeight * aspectRatio;
    }

    resizeCanvas(canvasWidth, canvasHeight);
    cnv.position((windowWidth - width)/2,(windowHeight - height)/2, "static")

    container.width = canvasWidth;
    container.height = canvasHeight;    
}

// Source - https://stackoverflow.com/a/42769683
// Posted by etham
// Retrieved 2026-02-19, License - CC BY-SA 3.0

function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
