
let Digit = function(size){
	
	this.size = size;
	this.currentDigit;
	
	this.data = [ 
		[ 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 24, 25, 29, 31, 32, 33],
		[ 2, 6, 7, 10, 12, 17, 22, 27, 31, 32, 33], 
		[ 1, 2, 3, 5, 9, 14, 18, 22, 26, 30, 31, 32, 33, 34], 
		[ 1, 2, 3, 5, 9, 14, 16, 17, 18, 24, 25, 29, 31, 32, 33], 
		[ 4, 8, 9, 12, 14, 16, 19, 20, 21, 22, 23, 24, 29, 34], 
		[ 0, 1, 2, 3, 4, 5, 10, 16, 17, 18, 24, 25, 29, 31, 32, 33],
		[ 1, 2, 3, 5, 9, 10, 15, 16, 17, 18, 20, 24, 25, 29, 31, 32, 33], 
		[ 0, 1, 2, 3, 4, 9, 13, 17, 22, 27, 32], 
		[ 1, 2, 3, 5, 9, 10, 14, 16, 17, 18, 20, 24, 25, 29, 31, 32, 33], 
		[ 1, 2, 3, 5, 9, 10, 14, 16, 17, 18, 19, 24, 25, 29, 31, 32, 33]
	];
}

Digit.prototype.setDigit = function(c){
	this.currentDigit = c;
}

Digit.prototype.draw = function(ctx){

	if(this.currentDigit == undefined)
		return;

	let dataArray = this.data[this.currentDigit];

	ctx.fillStyle = "#f00";
	
	let x, y;
	for(let i = 0; i < dataArray.length; i++){

		let index = dataArray[i];
		
		x = (index % 5) * this.size;
		y = Math.floor(index / 5) * this.size;

		ctx.fillRect(x, y, this.size, this.size);
	}
	
}