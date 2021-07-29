var lastPositionX, lastPositionY;
var color = "white";
var Linewidth = 1;

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = screen.width;
var height = screen.height;
var newWidth = width - 70;
var newHeight = height - 300;

console.log("width is" + width);

if (width < 992){
    document.getElementById("canvas").height = newHeight;
    document.getElementById("canvas").width = newWidth;
    document.body.style.overflow = "hidden";

}

canvas.addEventListener("touchstart", touchStart);

function touchStart(e){
    console.log("touchstart");
    color = document.getElementById("input_color").value;
    width = document.getElementById("input_width").value;

    lastPositionX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionY =  e.touches[0].clientY - canvas.offsetTop;

}


canvas.addEventListener("touchmove", touchMove);

function touchMove(e){
    console.log("touchmove");
    var current_x = e.touches[0].clientX - canvas.offsetLeft;
    var current_y = e.touches[0].clientY - canvas.offsetTop;
    
    
   
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.strokeWidth = Linewidth;

    ctx.moveTo(lastPositionX, lastPositionY);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();

    lastPositionX = current_x;
    lastPositionY = current_y;

    console.log("current x = " + current_x);
    console.log("current y = " + current_y);
    console.log("last x = " + lastPositionX );
    console.log("last y = " + lastPositionY );

}

function clear(){
    ctx.clearRect(0,0,800,canvas.height);
}