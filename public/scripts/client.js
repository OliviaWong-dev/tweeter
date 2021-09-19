/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweet-container").prepend($tweet);
    }
  };

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    const userArticle = `
    <article>
  <header>
    <div class="profile-img">
      <img src="${tweet.user.avatars}">
      <p>${tweet.user.name}</p>
    </div>
    <p class="handle">${tweet.user.handle}</p>
  </header>
  <p>${escape(tweet.content.text)}</p>
  <footer>
    <p class="timePosted" >${timeago.format(tweet.created_at)}</p>
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

  const loadTweet = function() {
    $.get("/tweets", function(data, status) {
      tweets = data;
      renderTweets(tweets);
    });
  };

  loadTweet();

  $("#tweet-form").submit(function(event) {
    event.preventDefault();
    var tweetTextLength = $("#tweet-text").val().length;
    if (tweetTextLength > 140) {
      return $("h3")
        .slideDown()
        .css("visibility", "visible")
        .text("Exceeded limit of 140 words!");
    }
    if (tweetTextLength === 0) {
      return $("h3")
        .slideDown("slow")
        .css("visibility", "visible")
        .text("Cannot be empty!");
    }
    if (tweetTextLength < 140 && tweetTextLength !== 0) {
      $("h3").slideUp("slow");
      $.post("/tweets", $("#tweet-form").serialize(), function(data, status) {
        $("h3").css("visibility", "hidden");
        tweets.push(data);
        loadTweet();
      });
    }
  });
});
