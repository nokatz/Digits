
let Digit = function(size){
	
	this.size = size;
	this.currentDigit;
	
	this.data = [ 
		{c: '0', d: [ 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 24, 25, 29, 31, 32, 33]},
		{c: '1', d: [ 2, 6, 7, 10, 12, 17, 22, 27, 31, 32, 33]}, 
		{c: '2', d: [ 1, 2, 3, 5, 9, 14, 18, 22, 26, 30, 31, 32, 33, 34]}, 
		{c: '3', d: [ 1, 2, 3, 5, 9, 14, 16, 17, 18, 24, 25, 29, 31, 32, 33]}, 
		{c: '4', d: [ 4, 8, 9, 12, 14, 16, 19, 20, 21, 22, 23, 24, 29, 34]}, 
		{c: '5', d: [ 0, 1, 2, 3, 4, 5, 10, 16, 17, 18, 24, 25, 29, 31, 32, 33]},
		{c: '6', d: [ 1, 2, 3, 5, 9, 10, 15, 16, 17, 18, 20, 24, 25, 29, 31, 32, 33]}, 
		{c: '7', d: [ 0, 1, 2, 3, 4, 9, 13, 17, 22, 27, 32]}, 
		{c: '8', d: [ 1, 2, 3, 5, 9, 10, 14, 16, 17, 18, 20, 24, 25, 29, 31, 32, 33]}, 
		{c: '9', d: [ 1, 2, 3, 5, 9, 10, 14, 16, 17, 18, 19, 24, 25, 29, 31, 32, 33]},
		{c: 'a', d: [ 1, 2, 3, 5, 9, 10, 14, 15, 16, 17, 18, 19, 20, 24, 25, 29, 30, 34]},
		{c: 'b', d: [ 0, 1, 2, 3, 5, 9, 10, 14, 15, 16, 17, 18, 20, 24, 25, 29, 30, 31, 32, 33]}, 
		{c: 'c', d: [ 1, 2, 3, 5, 9, 10, 15, 20, 25, 29, 31, 32, 33]},
		{c: 'd', d: [ 0, 1, 2, 3, 5, 9, 10, 14, 15, 19, 20, 24, 25, 29, 30, 31, 32, 33]},
		{c: 'e', d: [ 0, 1, 2, 3, 4, 5, 10, 15, 16, 17, 18, 20, 25, 30, 31, 32, 33, 34]},
	];
}

Digit.prototype.setDigit = function(c){
	this.currentDigit = c;
}

Digit.prototype.draw = function(ctx){

	if(this.currentDigit == undefined)
		return;

	// let dataArray = this.data[this.currentDigit];	
	// let obj = this.data[this.currentDigit];
	
	let obj = this.data.find((o) => {
		return o.c === this.currentDigit;
	});
	if(obj == undefined){
		return;
	} else {
		dataArray = obj.d;
	}

	ctx.fillStyle = "#f00";
	
	let x, y;
	for(let i = 0; i < dataArray.length; i++){

		let index = dataArray[i];
		
		x = (index % 5) * this.size;
		y = Math.floor(index / 5) * this.size;

		// ctx.fillRect(x, y, this.size, this.size);
		
		ctx.beginPath();
		ctx.arc(x + this.size / 2, y + this.size / 2, this.size / 3 + 2, 0, 2 * Math.PI, false);
		ctx.fill();
	}
	
}