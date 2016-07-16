/*******************NPM Packages **********************/
var twitter = require('twitter');
var spotify = require('spotify');

var action = process.argv[2];
var song = process.argv[3];
var song1 = process.argv[4];
var song2 = process.argv[5];
var song3 = process.argv[6];
var song4 = process.argv[7];

						/*This is for Twitter*/
if(action === 'my-tweets'){
var client = new twitter({
  consumer_key: 'HmjS9pB8vwmb4IGurZHz6VgCD',
  consumer_secret: 'LurEfY85cVG8ooKQmbST13N2snLePAouX0w2XSwuSmcRBHJV0A',
  access_token_key: '2881919943-E1vKtRkprCb90XNTsIJKpk2wSVBAsKHxIgGhKs0',
  access_token_secret: 'JEG0ZdjqCjSroRepVsdj1gn8xsKmqUckUKSG2Nc21e271'
});
 
var params =	{screen_name: 'zerox504'};
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
						/*This is for Spotify*/
} else if (action === 'spotify-this-song'){	
	spotify.search({ type: 'track', query: song + song1 + song2 + song3 + song4 }, function(err, data) {
    if (err) {
        console.log('Error occurred: ' + err);
        return;
    }

    var music = data;
 	  console.log(music);


});
}