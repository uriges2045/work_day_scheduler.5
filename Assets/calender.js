m = moment().hour();
console.log(m);


//Sets todays date at the top of the page      
var today = moment().format("MMMM " + "Do, " + "YYYY");
var currentDay = document.getElementById("currentDay");
currentDay.innerHTML = today

//Needed variables
var timeSlot = [["9AM","9"], ["10AM","10"], ["11AM","11"], ["12PM","12"], ["1PM","13"], ["2PM","14"], ["3PM","15"], ["4PM", "16"], ["5PM","17"], ["6pm","18"], ["7pm","19"], ["8pm","20"]];
var saveBtnIds = [];


var timeContainer =  $(".container");
//loop for timeSlot

for (var i = 0; i < timeSlot.length; i++){
    var section = $(`<section class= "row time-block">`);
    var timeBlk = $(`<time class = "col-md-2 hour">${timeSlot[i][0]}</time>`);
    var input = $(`<input class = "col-md-9 description" id= "input${timeSlot[i][0]}"></input>`);
    var saveBtn = $(`<button class = "col-md-1 saveBtn" id ="${timeSlot[i][0]}"><i class="far fa-save"></i></button>`);

    var storedTask = localStorage.getItem(`input${timeSlot[i][0]}`);
    input.val(storedTask);

    if (moment().hour() == parseInt(timeSlot[i][1])){
        input.addClass("present");
    }else if (moment().hour() > parseInt(timeSlot[i][1])){
        input.addClass("past");
    }else if (moment().hour() < parseInt(timeSlot[i][1])){
        input.addClass("future");
    }

    section.append(timeBlk);
    section.append(input);
    section.append(saveBtn);
    timeContainer.append(section);
    saveBtnIds.push(`${timeSlot[i][0]}`);
}

//debugger

saveBtnIds.forEach(id => {
    
    $(`#${id}`).on("click", function(){
        var task = ($(`#input${id}`).val());
        localStorage.setItem(`input${id}`, task);
    });
    
    
});


// $(".saveBtn").on("click", function(){

//     console.log(input);
//     console.log(input.val());

// });