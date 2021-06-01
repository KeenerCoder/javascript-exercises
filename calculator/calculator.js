function add(x, y) {
	return x + y;
}

function subtract(x, y) {
	return x - y;
}

function sum(numbers) {
	let total = 0;
	numbers.forEach(element => {
		total += element;
	});
	return total;
}

function multiply(numbers) {

	let total = 1;
	numbers.forEach(element => {
		total *= element;
	});
	return total;

}

function power(x, y) {
	return x ** y;
}

function factorial(number) {
	let factorialValue = 1;
	for (let i = number; i > 0; i--) {
		factorialValue = factorialValue * i;
	}
	return factorialValue;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}