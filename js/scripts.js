$(document).ready(function() {
  $(".button.dark").click(function() {
    $("h1, h2, h3, p, body, li, a").removeClass("light");
    $("h1, h2, h3, p, body, li, a").addClass("dark");
    $(".button.dark").hide();
    $(".button.light").show();
  });

  $(".button.light").click(function() {
    $("h1, h2, h3, p, body, li, a").removeClass("dark");
    $("h1, h2, h3, p, body, li, a").addClass("light");
    $(".button.light").hide();
    $(".button.dark").show();
  })
});
