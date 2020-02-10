
let canvas, ctx;
let digit;
let cellSize, scale = 5;
let charNum = 6;
let displayString = "", offset = 0;
let space = 5;

window.onload = function(){
	
	canvas = document.getElementById('canvas');
	
	canvas.width = charNum * 25 * scale;
	canvas.height = 35 * scale;

	ctx = canvas.getContext('2d');
	
	cellSize = canvas.width / (charNum * 5);
	
	digit = new Digit(cellSize);
	draw();
	
	addEventListener('keydown', (e) => {
		
		if(displayString.length >= charNum)
			return;
		
		// let character = String.fromCharCode(e.keyCode);
		let character = e.key;	
		displayString += character;
	
		draw();		
		
	});
	
} 

function draw(){
	
	// draw black background
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// draw grid
	ctx.strokeStyle = "#00f";	
	
	for(var i = 0; i < 5 * charNum; i++){
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

	// draw letters	
	for(let c = 0; c < displayString.length; c++){
		digit.setDigit(displayString[c]);
		digit.draw(ctx);
		offset += 25 * scale;
	}
	offset = 0;
	
}