$(document).ready(function () {
  $("textarea").keyup(function () {
    $(this)
      .siblings()
      .children()
      .last()
      .text(140 - this.value.length);
    const textLength = this.value.length;
    const sum = 140 - textLength;
    if (sum < 0) {
      $(".counter").css({ color: "red" });
    } else {
      $(".counter").css({ color: "#545149" });
    }
  });
});
