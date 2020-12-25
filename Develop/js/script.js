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

