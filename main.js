
let canvas, ctx;
let digit;
let size;

window.onload = function(){
	
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	
	size = canvas.width / 5;
	
	digit = new Digit(size);
	draw();
	
	addEventListener('keydown', (e) => {

		if(e.keyCode > 47 && e.keyCode < 58){			
			digit.setDigit(e.keyCode - 48);				
			draw();
		}
	});
	
} 

function draw(){
	
	// draw black background
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// draw grid
	// ctx.strokeStyle = "#00f";	
	
	// for(var i = 0; i < 5; i++){
		// ctx.beginPath();
		// ctx.moveTo( i * size, 0);
		// ctx.lineTo( i * size, canvas.height);
		// ctx.stroke();
	// }
	// for(var j = 0; j < 7; j++){
		// ctx.beginPath();
		// ctx.moveTo( 0, j * size);
		// ctx.lineTo(canvas.width, j * size);
		// ctx.stroke();
	// }

	// draw number
	digit.draw(ctx);
}