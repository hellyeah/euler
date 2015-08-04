var sumOfMultiples = function (a, b, limit) {
	count = 0
	for (var i = 0; i < limit; i++) {
		if ((i % a == 0) ||(i % b == 0)) {
			count+=i
			console.log(count)
		}
	}
}

sumOfMultiples(3,5,1000)
