// Display today's Date 
var todayDate = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(todayDate);

$(function(){

    $(".saveBtn").on("click",function(){
        //Get the value
        var text= $(this).siblings(".description").val();
        var time=$(this).parent().attr("id");

        //Save the value in local storage
        localStorage.setItem(time,text);
    })

    function timetracker(){
        //Get cuurent time in hours
        var timeNow = moment().hour();
               
        $(".time-block").each(function(){
            var timeBlock = parseInt($(this).attr("id").split("hour"));
                       
            if(timeBlock < timeNow)
            {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if( timeBlock > timeNow)
            {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
            else
            {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
        })
    }

    // Get item from local storage
    $("#hour .description").val(localStorage.getItem("9"));
    $("#hour .description").val(localStorage.getItem("10"));
    $("#hour .description").val(localStorage.getItem("11"));
    $("#hour .description").val(localStorage.getItem("12"));
    $("#hour .description").val(localStorage.getItem("13"));
    $("#hour .description").val(localStorage.getItem("14"));
    $("#hour .description").val(localStorage.getItem("15"));
    $("#hour .description").val(localStorage.getItem("16"));
    $("#hour .description").val(localStorage.getItem("17"));

    timetracker();
})