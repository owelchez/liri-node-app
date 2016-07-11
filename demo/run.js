var myBands = require('./bands.js').music;


for (var genre in myBands){
	console.log('A ' + genre + ' is ' + myBands[genre]);
}
