function trailingZeros(n) {
  //your JS code here. If required.
	let factNum = factorial(n);
	// let intNum = parseIngt(factNum,10);

	  var countZeros = 0;
      while (factNum % 10 === 0) {
        countZeros++;
        factNum = factNum / 10;
      }
	return countZeros;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));

function factorial(n){
	if(n==0 || n==1){
		return 1;
	}else{
		return n*factorial(n-1);
	}
}
