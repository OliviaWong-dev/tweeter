$(document).ready(function() {
  $("textarea").keyup(function() {
    $(this)
      .siblings()
      .children()
      .last()
      .text(140 - $(this).val().length);
    const textLength = $(this).val().length;
    const sum = 140 - textLength;
    if (sum < 0) {
      $(".counter").addClass("negativeCounter");
    } else {
      $(".counter").removeClass("negativeCounter");
    }
  });
});
