var sumEven = function (x,sum) {
  if (x%2 == 0) {
    return sum+x
  } else {
    return sum
  }
}

var sumOfEvenFib = function (a,b,limit,sum) {
  if (a+b > limit) {
    return sum
  } else {
    sumOfEvenFib(b,a+b,limit,sumEven(a+b,sum))
  }
}

var generateFib = function (a,b,limit) {
  console.log(a)
  if (a+b > limit) {
    return b
  } else {
    generateFib(b,a+b,limit)
  }
}

console.log(generateFib(1,2,10))

console.log(sumOfEvenFib(1,2,100,2))
