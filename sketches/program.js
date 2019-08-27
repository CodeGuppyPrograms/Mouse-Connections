// #SKETCHNAME Mouse connections
var noBalls = 100;
var speed = 1;
var distBalls = 100;

var balls = [];

function enter()
{
    createBalls();    
}

function loop()
{
    clear();
    
    updateBalls();
    displayBalls();
    displayConnections(mouseX, mouseY);
    
    displayInstructions();
}

function createBalls()
{
    for(var i = 0; i < noBalls; i++)
    {
        var ball = {
            x : random(width), 
            y : random(height), 
            dx : random([-1, 1]), 
            dy : random([-1, 1]),
            speed : speed
        };
        
        balls.push(ball);
    }
}

function updateBalls()
{
    for(var i = 0; i < balls.length; i++)
    {
        var ball = balls[i];
        
        ball.x += ball.dx * ball.speed;
        ball.y += ball.dy * ball.speed;
        
        if (ball.x > width || ball.x < 0)
            ball.dx *= -1;
            
        if (ball.y > height || ball.y < 0)
            ball.dy *= -1;
    }
}

function displayBalls()
{
    for(var i = 0; i < balls.length; i++)
    {
        var ball = balls[i];
        
        fill(255);
        stroke(150);
        circle(ball.x, ball.y, 3);
    }
}

function displayConnections(fromX, fromY)
{
    for(var i = 0; i < balls.length; i++)
    {
        var ball = balls[i];

        var d = dist(fromX, fromY, ball.x, ball.y);
        if (d < distBalls)
        {
            var color = map(d, 0, distBalls, 0, 150);
            stroke(color);
            fill(color);

            circle(fromX, fromY, 3);
            circle(ball.x, ball.y, 3);
            line(fromX, fromY, ball.x, ball.y);
        }
    }
}

function displayInstructions()
{
    push();
    fill(0);
    noStroke();
    text("Move your mouse inside the canvas area", 10, 590);
    pop();
}
