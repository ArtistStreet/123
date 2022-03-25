// a = 5;
// b = 5;
function display_result(sum) {
	console.log('sum is ' + sum);
}
function add_two_numbers(callback, a, b) {
	var sum = a + b;

	callback(sum);
}

function run() {
	var a = 5;
	var b = 7;
	add_two_numbers(display_result, a, b);
}
run()
// function finish_add_numbers() {

// }

// function add_two_numbers(a, b, callback) {
// 	var sum = a + b;
// 	console.log('sum is '+ sum);
// 	callback();
// }

// add_two_numbers(2, 3, finish_add_numbers)
