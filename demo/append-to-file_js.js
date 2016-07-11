
var fs = require('fs');

fs.appendFile('movies.txt', 'New Movie', function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Successfully added');
	}
});