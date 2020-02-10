
let canvas, ctx;
let digit;
let cellSize, scale = 3;
let charNum = 10;
let displayString = "", offsetX = 5 * scale, offsetY = 5 * scale;
let spaceX = 5, spaceY = 10;

window.onload = function(){
	
	canvas = document.getElementById('canvas');
	
	canvas.width = (25 + spaceX) * charNum * scale;
	canvas.height = (35 + spaceY) * scale;

	ctx = canvas.getContext('2d');
	
	cellSize = canvas.width / (charNum * 6);
	
	digit = new Digit(cellSize);
	draw();
	
	addEventListener('keydown', (e) => {
		
		if(displayString.length >= charNum)
			return;
		
		// if backspace
		if(e.keyCode === 8){
			displayString = displayString.slice(0, displayString.length - 1);
			
		} else {
			// let character = String.fromCharCode(e.keyCode);
			let character = e.key;	
			displayString += character;
		}
	
		draw();		

	});
	
} 

function draw(){
	
	// draw black background
	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// draw grid
	ctx.strokeStyle = "#00f";	
	
	for(var i = 0; i < 6 * charNum; i++){
		ctx.beginPath();
		ctx.moveTo( i * cellSize, 0);
		ctx.lineTo( i * cellSize, canvas.height);
		ctx.stroke();
	}
	for(var j = 0; j < 9; j++){
		ctx.beginPath();
		ctx.moveTo( 0, j * cellSize);
		ctx.lineTo(canvas.width, j * cellSize);
		ctx.stroke();
	}

	// draw letters	
	for(let c = 0; c < displayString.length; c++){
		digit.setDigit(displayString[c]);
		digit.draw(ctx);
		offsetX += (25 + spaceX) * scale;
	}
	offsetX = 5 * scale;
	
}