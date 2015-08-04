var prime = function(x,a) {
  a = typeof a !== 'undefined' ? a : 2;
  if (x==a) {
    return true
  } else if (x%a==0) {
    return false
  } else {
    return prime(x,a+1)
  }
}

prime(13)

var factor = function(x,a) {
  if (x%a==0) {
    return true
  } else {
    return false
  }
}

var factors = function(x,a,arrOfFactors) {
  a = typeof a !== 'undefined' ? a : x;
  arrOfFactors = typeof arrOfFactors !== 'undefined' ? arrOfFactors : [];
  if (a==0) {
    return arrOfFactors
  } else if (factor(x,a)) {
    arrOfFactors.push(a)
  } else {
    factors(x,a-1,arrOfFactors)
  }
}

var primeFactors = function (x,a) {
//want to start at the number and work down
//can cut down on time by clearly skipping numbers that wont work
//for instance starting by %2

}
