module.exports = function reverse (n) {
	let i = 0;
    n = Math.abs(n);
	n = n.toString();
	let result = '';
    
	while (i < n.length){
	  result = n[i] + result;
      console.log(result);
	  i++;
	}

    result= +result;
	return result;
}
