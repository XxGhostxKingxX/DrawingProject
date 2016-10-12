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

//moon
canvas.beginPath();
canvas.fillStyle = "lightgrey";
canvas.arc(400,0,70,0,2*Math.PI,true);
canvas.fill();

//tree hole
canvas.beginPath();
canvas.fillStyle = "black";
canvas.moveTo(185,170);
canvas.lineTo(170,200);
canvas.lineTo(200,200);
canvas.fill();
