
let Digit = function(size){
	
	this.size = size;
	this.currentDigit;
	
	this.data = data;
	
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