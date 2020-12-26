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