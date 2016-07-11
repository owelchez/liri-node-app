/*Create a Node application that reads the best_things_ever.txt file, 
parses the comma separated elements, and ultimately console logs each 
element in the file on separate lines.

HINT: If you are struggling to figure out how to loop your way through the text, 
look into the .split() method. This could make your life a whole lot easier.
Your final output should look something like this:

lazy boy recliner
massage
meditation
hot shower
cheese fondue
hot coffee with cashew milk
kitten falling asleep on my lap*/

var fs = require('fs');

fs.readFile('best_thing_ever.txt', 'utf8', function(err, data){
	if (err) {
		return console.error(err);
	}

	var text = data.split(', ');
​
	for (var i = 0; i < text.length; i++) {
		console.log(text[i]);
	}
});









