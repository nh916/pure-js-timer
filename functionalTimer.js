/*
@fileOverview This is a simple timer written in pure JavaScript ES6 or ES 2015
*/
let thisTime;
let theInterval;
let ID;
let minutesAndSeconds = false;
let pausePoint;

/* sets the amount of thisTime and adds 1 to it
for the user to see that it started from 30 and not 29
@param {timer} num The amount the timer should run for
@return null/none
*/
function setTimer(timer) {
  thisTime = timer + 1;
}

// sets Id
function setID(idGiven) {
  ID = idGiven;
}

function setMinutesAndSeconds(choice) {
  if (choice === true) {
    minutesAndSeconds = true;
  } else if (choice === false) {
    minutesAndSeconds = false;
  } else {
    console.error('setMinutesAndSeconds has a boolean parameter');
  }
}

function setPausePoint(thePausePoint) {
  pausePoint = thePausePoint;
}

/* uses the id from global var
 subtracts one from the given timer
 then replaces the id
 once it hits 0 it stops */

function timeIt() {
  thisTime--;
  const timer = document.getElementById(ID);

  if (thisTime === 0) {
    clearInterval(theInterval);
  }

  if (minutesAndSeconds) {
    timer.textContent = convertSeconds();
  } else {
    timer.textContent = thisTime.toString();
  }
}

function stopAndClear() {
  const currentTimer = document.getElementById(ID);
  currentTimer.textContent = '';
  clearInterval(theInterval);
}


/* starts the timer
Takes the amount that the developer wants the timer to run for
takes the ID that the developer wants to put the timer inside of
when the timer hits 0 it stops itself */

function startTimer(amount, id = 'timer') {
  setTimer(amount);
  setID(id);
  timeIt();
  theInterval = setInterval(timeIt, 1000);
}

// converts seconds to minutes. For example 65 seconds to 1:05
function convertSeconds() {
  const minutes = Math.floor(thisTime / 60);
  const seconds = thisTime % 60;

  if (minutes >= 1 && seconds < 10) {
    return (`${minutes}:0${seconds}`);
  } else if (minutes >= 1 && seconds >= 10) {
    return (`${minutes}:${seconds}`);
  } else {
    return seconds;
  }
}

/* pauses the clock on the second that its said
checks every second to see if its at the pausing point
and once it is it clears the interval */

function pause(pointToPause) {
  const pausingInterval = setInterval(function() {
    if (thisTime === pointToPause) {
      clearInterval(theInterval);
      clearInterval(pausingInterval);
      setPausePoint(pointToPause);
    }
  }, 1000);
}

/* function resume () {
  startTimer(pausePoint)
} */
