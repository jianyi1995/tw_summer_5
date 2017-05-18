module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}`);
    console.log(`o) 最小值 = ${sequence.maximum()}`);
    console.log(`o) 元素数量 = ${sequence.length}`);
    console.log(`o) 平均值 = ${sequence.average()}`);


};

class Sequence {
  constructor(input) {
    // Write your code here
    this.array = input
    this.length = input.length
  }

  minimum() {
  	let min = this.array[0]
    // Write your code here
    for(let v of this.array){
    	if(v < min)
    		min = v
    }
    return min
  }

  maximum(){
  	let max = this.array[0]
  	for(let v of this.array){
  		if(v > max)
  			max = v
  	}
  	return max
  }

  // Write your code here
  average(){
  	let res = 0
  	for(let v of this.array)
  		res += v
  	res /= this.length
  	return res.toFixed(2)
  }
}
