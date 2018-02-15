require("dotenv").config();

var keys = require ("./keys.js");

fs.readFile('random.txt','utf8',  function(error, data) {

  // If there's an error log it and return
  if (error) {
    return console.log(error);
  };

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);