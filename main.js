

var time = moment().format('H');
var thisHour = $('#showPls').text();

$( document ).ready(function createApt() {

//THEN the current day is displayed at the top of the calendar
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

});


//WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future
//write a function
function timeChoice() {
   
        if (thisHour > time) {
            $('hour').attr('class',"future")
        }
        else if (thisHour === time) {
            $('hour').attr('class', "present");
        }
        else {
            $('hour').attr('class', "past");
        }
    };

console.log(thisHour);
timeChoice();
console.log(timeChoice);

// make save button log events 
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).attr("id");
    var log = $(this).s(".log").val();

    localStorage.setItem(time, log);
});

console.log(saveBtn);
//$t("#timeBlock").each(function(){
   // var blockTime = $(this).attr("block-time")


//})














//WHEN I click into a time block


//THEN I can enter an event

//WHEN I click the save button for that time block

//THEN the text for that event is saved in local storage
//var activites = localStorage.getItem("activites")
//WHEN I refresh the page

//THEN the saved events
