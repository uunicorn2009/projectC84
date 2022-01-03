// Create a reference for the canvas
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");




function upload_background(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_imgtag,rover_X,rover_Y,rover_width,rover_height);
}
img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}

function aplhabetkey()
{ img_image="Alpkey.png";
add();
	
	}

function numberkey()
{
	img_image="numkey.png";
	add();

}
function arrowkey()
{
	img_image="Arrkey.png"
	add();
}
function specialkey()
{
	img_image="spkey";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
