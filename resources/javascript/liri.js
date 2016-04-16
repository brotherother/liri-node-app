var fs = require('fs');
var request = require('request');
var twitter = require('./keys');

var keys = twitter.twitterKeys;

var appName = process.argv[2]
console.log(appName);

switch(appName) {
    // FIGURE OUT TWITTER API
    // case my-tweets:
    //     var myTweets = "https://api.twitter.com/1.1/statuses/user_timeline.jsonscreen_name=dennisrflynn&count=20"
    //     for (var i = 0; i < myTweets.lenght; i++) {
    //     	console.log(myTweets[i].text);
    //     	console.log(myTweets[i].created_at);
    //     }
    //     break;

    //FIX JSON FORMAT REFERENCE FOR SPOTIFY AND OMDBI
    case "spotify-this-song":
    	var songToSearch = encodeURI(process.argv[3])
        var queryURL = "https://api.spotify.com/v1/search?q=" +songToSearch+ "a&type=track";
        request(queryURL, function(error,response, body) {
            console.log("Artist's Name: " +response.tracks[0].items[0].artists[0].name);
            console.log("Song Name: " +response.tracks[0].items[0].name);
            console.log("Preview Link: " +response.tracks[0].items[0].preview_url);
            console.log("Album Name: " +response.tracks[0].items[0].album.name);
        });
        break;
    case "movie-this":
    	var movieToSearch = encodeURI(process.argv[3]);
        if (movieToSearch==="") {
            movieToSearch=encodeURI("Mr. Nbody");
        };
    	var queryURL = "http://www.omdbapi.com/?t=" +movieToSearch
        request(queryURL, function(error,response, body) {
            console.log(response);
            console.log("Title: " +response.body.title);
            console.log("Year: " +response.body.year);
            console.log("IMDB Rating: " +response.body.imdbRating);
            console.log("Country: " +response.body.Country);
            console.log("Language: " +response.body.Language);
            console.log("Plot: " +response.body.Plot);
            console.log("Actors: " +response.body.Actors);
            // console.log("Rotton Tomatoes Rating: " +response.tracks.items[0].album.name);
        });
        break;
    //  PULL FROM RANDOM.TXT
    // case do-what-it-says:
    // 	// code block
    //     break;
    default:
        // default code block
} 

// OUTPUT EVERYTHING TO LOG.TXT