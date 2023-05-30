$(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  $(".time-block").each(function () {
    var currentHour = parseInt(dayjs().format("h"));
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(currentHour, blockHour);

    if (blockHour < currentHour) {
      $(this).addClass("bg-secondary");
    } else if (blockHour === currentHour) {
      $(this).removeClass("bg-secondary");
      $(this).addClass("bg-primary");
    } else {
      $(this).removeClass("bg-secondary");
      $(this).removeClass("bg-primary");
      $(this).addClass("bg-primary-subtle");
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
