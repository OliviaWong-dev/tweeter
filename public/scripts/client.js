/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const tweetData = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  };

  const createTweetElement = function (tweet) {
    const $article = $("<article>");
    const userArticle = `
  <header>
    <div class="profile">
      <img src="${tweet.user.avatars}">
      <p>${tweet.user.name}</p>
    </div>
    <p class="handle">${tweet.user.handle}</p>
  </header>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae numquam suscipit obcaecati quo, deleniti, nesciunt non dignissimos maiores dolorum eos debitis dolorem? Beatae, vitae velit deleniti adipisci architecto omnis!</p>
  <footer>
    <p class="timePosted"></p>
    <div>
    <i class="fa fa-flag"></i>
    <i class="fa fa-retweet"></i>
    <i class="fa fa-heart"></i>
  </div>
  </footer>
`;
    $article.append(userArticle);
    return $article;
  };

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $("#tweet-container").append($tweet);
});
