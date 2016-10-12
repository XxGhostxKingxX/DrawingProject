var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

//background
canvas.fillStyle = "black";
canvas.fillRect(0,0,400,400);

//ground
canvas.beginPath();
canvas.fillStyle = "green";
canvas.fillRect(0,360,400,40);

//tree trunk
canvas.beginPath();
canvas.fillStyle = "brown";
canvas.fillRect(150,140,70,230);

//leaves
canvas.beginPath();
canvas.fillStyle = "green";
canvas.arc(130,125,45,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.arc(240,125,45,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.arc(185,100,45,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.arc(130,85,45,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.arc(230,85,45,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "green";
canvas.arc(185,50,45,0,2*Math.PI,true);
canvas.fill();

/*
//bottom ball
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(200,300,70,0,2*Math.PI,true);
canvas.fill();

//middle ball
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(200,200,50,0,2*Math.PI,true);
canvas.fill();

//head
canvas.beginPath();
canvas.fillStyle = "white";
canvas.arc(200,125,35,0,2*Math.PI,true);
canvas.fill();

//right eye
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(190,115,4,0,2*Math.PI,true);
canvas.fill();

//left eye
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(210,115,4,0,2*Math.PI,true);
canvas.fill();

//nose
canvas.beginPath();
canvas.fillStyle = "orange";
canvas.moveTo(200,122);
canvas.lineTo(220,126);
canvas.lineTo(200,130);
canvas.fill();

/*
//hat
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(200,100,25,0,Math.PI,true);
canvas.fill();
canvas.fillRect(163,94,75,8);
*/

/*
//left arm
canvas.beginPath();
canvas.lineWidth=2;
canvas.strokeStyle = "brown";
canvas.moveTo(220,180);
canvas.lineTo(300,160);
canvas.lineTo(315,165);
canvas.moveTo(300,160);
canvas.lineTo(315,158);
canvas.moveTo(300,160);
canvas.lineTo(315,150);
canvas.stroke();

//right arm
canvas.beginPath();
canvas.moveTo(170,180);
canvas.lineTo(110,240);
canvas.lineTo(115,255);
canvas.moveTo(110,240);
canvas.lineTo(95,255);
canvas.moveTo(110,240);
canvas.lineTo(85,255);
canvas.stroke();

//buttons
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(200,180,5,0,2*Math.PI,true);
canvas.arc(200,220,5,0,2*Math.PI,true);
canvas.arc(200,260,5,0,2*Math.PI,true);
canvas.fill();
*/

//moon
canvas.beginPath();
canvas.fillStyle = "lightgrey";
canvas.arc(400,0,70,0,2*Math.PI,true);
canvas.fill();
