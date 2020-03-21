const twit = require("twit");
const config = require("./config.js");
const T = new twit(config);

const stream = T.stream("statuses/filter", {
  track: ["João Pessoa", "joão pessoa", "JOÃO PESSOA"]
});

// use this to log errors from requests
function responseCallback(err, data, response) {
  console.log(err);
}

// event handler
stream.on("tweet", tweet => {
  // retweet
  T.post("statuses/retweet/:id", { id: tweet.id_str }, responseCallback);
});
