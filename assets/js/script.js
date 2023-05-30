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

  $(".saveBtn").on("click", function () {
    var hourId = $(this).parent().attr("id");
    var input = $(this).siblings(".description").val();

    localStorage.setItem(hourId, input);
  });

  $(".description").each(function () {
    var id = $(this).parent().attr("id");
    var saved = localStorage.getItem(id);

    if (saved !== null) {
      $(this).val(saved);
    }
  });
});
