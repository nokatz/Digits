
let canvas, ctx;
let digit;
let cellSize, scale = 5;

window.onload = function(){
	
	canvas = document.getElementById('canvas');
	
	canvas.width = 25 * scale;
	canvas.height = 35 * scale;

	ctx = canvas.getContext('2d');
	
	cellSize = canvas.width / 5;
	
	digit = new Digit(cellSize);
	draw();
	
	addEventListener('keydown', (e) => {
		
		// let character = String.fromCharCode(e.keyCode);
		let character = e.key;
		console.log(character);

		// if(e.keyCode > 47 && e.keyCode < 58){			
			digit.setDigit(character);
			// digit.setDigit(e.keyCode - 48);			
			draw();
		// }
	});
	
} 

function draw(){
	
	// draw black background
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// draw grid
	ctx.strokeStyle = "#00f";	
	
	for(var i = 0; i < 5; i++){
		ctx.beginPath();
		ctx.moveTo( i * cellSize, 0);
		ctx.lineTo( i * cellSize, canvas.height);
		ctx.stroke();
	}
	for(var j = 0; j < 7; j++){
		ctx.beginPath();
		ctx.moveTo( 0, j * cellSize);
		ctx.lineTo(canvas.width, j * cellSize);
		ctx.stroke();
	}

	// draw number
	digit.draw(ctx);
}