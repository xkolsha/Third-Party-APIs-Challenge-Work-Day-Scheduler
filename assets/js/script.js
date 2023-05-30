$(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  $(".time-block").each(function () {
    var currentHour = dayjs().hour();
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
});
