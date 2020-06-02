$(Document).ready(function() {
  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("DayMode");
  })

  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("NightMode");
  })
})