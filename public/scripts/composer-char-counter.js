$(document).ready(function () {
  $("textarea").keyup(function () {
    $(this)
      .siblings()
      .children()
      .last()
      .text(140 - $(this).val().length);
    const textLength = $(this).val().length;
    const sum = 140 - textLength;
    if (sum < 0) {
      // $(".counter").css({ color: "red" });
      $(".counter").addClass("negativeCounter");
    } else {
      $(".counter").removeClass("negativeCounter");
    }
  });
  $(".timePosted").text(timeago.format(new Date()));
});
