/*spotify-this-song

movie-this

do-what-it-says

node liri.js my-tweets

This will show your last 20 tweets and when they were created at in your terminal/bash window.
node liri.js spotify-this-song '<song name here>'

This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from spotify
The album that the song is from
if no song is provided then your program will default to

"The Sign" by Ace of Base
node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:

Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotton Tomatoes URL.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
It's on Netflix!
node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.
BONUS

In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.

Make sure you append each command you run to the log.txt file.

Do not overwrite your file each time you run a command.*/

//my-tweets

var action = process.argv[2];

if(action === 'my-tweets'){

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'HmjS9pB8vwmb4IGurZHz6VgCD',
  consumer_secret: 'LurEfY85cVG8ooKQmbST13N2snLePAouX0w2XSwuSmcRBHJV0A',
  access_token_key: '2881919943-E1vKtRkprCb90XNTsIJKpk2wSVBAsKHxIgGhKs0',
  access_token_secret: 'JEG0ZdjqCjSroRepVsdj1gn8xsKmqUckUKSG2Nc21e271'
});
 
var params =	{screen_name: 'zerox504',
				 text: 'text'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
  	var tweetsLength = tweets.length;

  	for(var index = 0; index < tweetsLength; index++){
  		var timeStamp = tweets[index].created_at;
  		var tweety = tweets[index].text;
  		console.log(timeStamp + " " + tweety + "\n");
  	}
  }
});
}







