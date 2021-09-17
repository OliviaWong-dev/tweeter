/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweet-container").append($tweet);
      // console.log($tweet);
    }
  };

  const createTweetElement = function (tweet) {
    const userArticle = `
    <article>
  <header>
    <div class="profile">
      <img src="${tweet.user.avatars}">
      <p>${tweet.user.name}</p>
    </div>
    <p class="handle">${tweet.user.handle}</p>
  </header>
  <p>${tweet.content.text}</p>
  <footer>
    <p class="timePosted"></p>
    <div>
    <i class="fa fa-flag"></i>
    <i class="fa fa-retweet"></i>
    <i class="fa fa-heart"></i>
  </div>
  </footer>
  </article>
`;
    return userArticle;
  };
  let tweets = [];

  const loadTweet = function () {
    $.get("/tweets", function (data, status) {
      tweets = data;
      renderTweets(tweets);
    });
  };

  loadTweet();

  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    $.post("/tweets", $("#tweet-form").serialize(), function (data, status) {
      tweets.push(data);
      renderTweets(tweets);
    });
  });
});
