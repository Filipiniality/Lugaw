$(function() {
  const e = new Freezeframe({
      trigger: 'click',
      responsive: false,
  });
  $("#play-gif").on("click", function(){e.start()});
  $("#stop-gif").on("click", function(){e.stop()});
});