var mouseEvent= "empty";
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{  
    var color=document.getElementById("color").value;
    console.log(color);
    var width_of_line=document.getElementById("width").value ;
    console.log(width_of_line);
    var radius_circle=document.getElementById("radius").value;
    console.log(radius_circle);
    mouseEvent="mouseDown";

}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
mouse_y=e.clientY -canvas.offsetTop;
mouse_x=e.clientX -canvas.offsetLeft;
if (mouseEvent=="mouseDown") {
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= width_of_line;
ctx.arc(mouse_x,mouse_y,radius_circle,0,2*Math.PI);
ctx.stroke();
}
} 