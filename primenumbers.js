// a function which returns prime numbers in an array
var isPrime = (num) => { // naming the function that will select whether a number is prime or not
  for (var i = 2; i < num; i++) { 
    if(num % i === 0) return false;
  }
  return num > 1;
}
var primeNums = []; // creating an array
for (var num = 2; num < 101; num++){ // declaring the range within which to pick from
	if (isPrime(num)) {
		primeNums.push(num); // pushing all the numbers that return true into the array
	}
}
console.log(primeNums); // displaying the prime numbers