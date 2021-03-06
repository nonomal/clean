function extractDomain(i) {
  var n;
  return (
    (n = i.indexOf("://") > -1 ? i.split("/")[2] : i.split("/")[0]),
    (n = n.split(":")[0]),
    (n = n.replace("www.", "")),
    (n = n.replace(".com", ""))
  );
}
$(document).ready(function() {
  Pace.on("done", function() {}),
    new WOW().init(),
    $(".site-main").fitVids(),
    $("#toggle").click(function() {
      $(this).toggleClass("active"),
        $("#overlay").toggleClass("open"),
        $("body").toggleClass("no-scroll");
    }),
    "undefined" != typeof social_icons
      ? $.each(social_icons, function(i, n) {
          $(".social-navigation ul").append(
            '<li><a href="' + n + '">' + extractDomain(n) + "</a></li>"
          );
        })
      : $(".social-navigation").remove(),
    $(".scroll-top").click(function() {
      return $("html, body").animate({ scrollTop: 0 }, 600), !1;
    });
});
