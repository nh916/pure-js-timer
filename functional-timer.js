var This_time;
var theinterval;
var ID;
var its0;

 // sets the amount of This_time and adds 1 to it for the user to it started from 30 and not 29 
function set_timer(timer) {
    This_time = timer + 1;
}

 // sets Id 
function set_id(idGiven) {
    ID = idGiven;
}

/*uses the id from global var
 subtracts one from the given timer
 then replaces the id
 once it hits 0 it stops*/

function timeIt() {
    This_time--;
    var timer = document.getElementById(ID);
    timer.innerText = This_time.toString();

    if (This_time === 0) {
        clearInterval(theinterval);
    }

}

function stopAndClear() {
    let currentTimer = document.getElementById(ID);
    currentTimer.innerText = ;
    clearInterval(theinterval);
}


/*starts the timer
Takes the amount that the developer wants the timer to run for
takes the ID that the developer wants to put the timer inside of
when the timer hits 0 it stops itself*/

function start_timer(amount, id) {
    set_timer(amount);
    set_id(id);
    timeIt();
    theinterval = setInterval(timeIt, 1000);
}

// converts seconds to minutes. For example 65 seconds to 1:05
function convert_seconds(s) {
    var min = Math.floor(s  60);
    var seconds = s % 60;

    if (min  1 && seconds  10) {
        return min +  + 0 + seconds;
    }

    else{
        return seconds;
    }

     else if (min  1 && seconds ) {
         return min +  + seconds;
     }
}


/*pauses the clock on the second that its said
checks every second to see if its at the pausing point and once it is it clears the interval*/

function pause(point_to_pause) {
    setInterval(function () {pausing(point_to_pause)}, 1000);

    function pausing(point_to_pause) {
        if (This_time === point_to_pause) {
            clearInterval(theinterval)
        }
    }
}