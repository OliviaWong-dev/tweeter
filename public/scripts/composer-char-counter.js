$(document).ready(function () {
  console.log(this);
  $("textarea").keyup(function () {
    $(this)
      .siblings()
      .children()
      .last()
      .text(140 - this.value.length);
  });
});
