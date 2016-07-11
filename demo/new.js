/*Starting from a blank Javascript file, create a Node application that takes 
in two command line arguments and checks if they are equal. If the two numbers 
are equal then output: "true". Otherwise output: "false".

Bonus: Check if the two numbers are both multiples of 7.
 Again output "true" if they are and output "false" if they are not.
Hint: console.log(process.argv) as a starting point if you are completely los*/


var number1 = process.argv[2];
var number2 = process.argv[3];

if (number1 === number2){
	console.log(true);
} else {
	console.log(false);
}

if (number1 && number2 % 7 === 0){
	console.log(true);
} else {
	console.log(false);
}



