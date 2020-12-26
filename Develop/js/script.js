var currentDate = moment().format('MMMM Do YYYY');
var hour = moment().format("HH");
var timeState = $('.current-time');

var loadedTasks = localStorage.getItem('task');
loadedTasks = JSON.parse(loadedTasks);
if (loadedTasks === null) {
    console.log("No existing tasks")
} else {
    $(".text-box").each(function (index) {
        $(this).text(loadedTasks[index])
})}

timeState.each(function () {
    let currentTime = parseInt($(this).text());
    if (currentTime < hour) {
        $(this).parent().addClass("past");
    } else if (currentTime > hour) {
        $(this).parent().addClass("future");
    } else {
        $(this).parent().addClass("present");
}});

function saveTask() {
    var givenTask = []
    for (var i = 0; i < $(".text-box").length; i++) {
        givenTask.push($(".text-box")[i].innerHTML);
    }
    localStorage.setItem("task", JSON.stringify(givenTask));
}

$('#currentDate').text(currentDate);

$(".edit").on('blur', 'textarea', function () {
    var task = $(this)
        .val()
        .trim();

    var newTask = $("<p>")
        .addClass("text-box")
        .text(task);

    $(this).replaceWith(newTask);
    saveTask();
})

$('.saveBtn').on('click', saveTask);