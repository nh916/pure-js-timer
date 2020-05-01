/*
@fileOverview This is a simple timer written in pure JavaScript ES6 or ES 2015
*/
let globalTimerInSeconds;
let theTimerInterval;
let elementID;
let minutesAndSeconds = false;
let pausePoint;

/* sets the amount of globalTimerInSeconds and adds 1 to it
for the user to see that it started from 30 and not 29
@param {timer} num The amount the timer should run for
@return null/none
*/
function setTimer(timer) {
  globalTimerInSeconds = timer + 1;
}

// sets Id
function setID(idGiven) {
  elementID = idGiven;
}

/* setter for minutes and seconds.
* if true the timer will use minutes and seconds like 1:10
* otherwise it will use 70 seconds */
function setMinutesAndSeconds(choice) {
  if (choice === true) {
    minutesAndSeconds = true;
  } else if (choice === false) {
    minutesAndSeconds = false;
  } else {
    console.error('setMinutesAndSeconds has a boolean parameter');
  }
}

/* sets at which second the timer should be paused
* if the parameter is incorrect it gives a specific message for easy fix*/
function setPausePoint(thePausePoint) {
  if (typeof (thePausePoint) === 'number') {
    pausePoint = thePausePoint;
  } else {
    console.error('setPausePoint needs a number parameter to know on what second it should stop');
  }
}

/* uses the id from global var
 subtracts one from the given timer
 then replaces the id
 once it hits 0 it stops */

function timeIt() {
  globalTimerInSeconds--;
  const timer = document.getElementById(elementID);

  if (globalTimerInSeconds === 0) {
    clearInterval(theTimerInterval);
  }

  if (minutesAndSeconds) {
    timer.textContent = convertSeconds();
  } else {
    timer.textContent = globalTimerInSeconds.toString();
  }
}

/* will stop the timer and erase whatever that was in the element
by setting the textContent to an empty String '' */
function stopAndClear() {
  const currentTimer = document.getElementById(elementID);
  clearInterval(theTimerInterval);
  currentTimer.textContent = '';
}


/* starts the timer
Takes the amount that the developer wants the timer to run for
takes the elementID that the developer wants to put the timer inside of
when the timer hits 0 it stops itself */

function startTimer(amount, id = 'timer') {
  setTimer(amount);
  setID(id);
  timeIt();
  theTimerInterval = setInterval(timeIt, 1000);
}

// converts seconds to minutes. For example 65 seconds to 1:05
function convertSeconds() {
  const minutes = Math.floor(globalTimerInSeconds / 60);
  const seconds = globalTimerInSeconds % 60;

  // if it has minutes but seconds are in single digits add a zero
  if (minutes >= 1 && seconds < 10) {
    return (`${minutes}:0${seconds}`);
  }
  /* if it has a minutes and seconds are in double digits t
  then  return seconds */
  else if (minutes >= 1 && seconds >= 10) {
    return (`${minutes}:${seconds}`);
  }
  // if it does not have minutes then return seconds
  else {
    return seconds;
  }
}

/* pauses the clock on the second that its said
checks every second to see if its at the pausing point
and once it is it clears the interval */

function pause(pointToPause) {
  const pausingInterval = setInterval(function() {
    if (globalTimerInSeconds === pointToPause) {
      clearInterval(theTimerInterval);
      clearInterval(pausingInterval);
      setPausePoint(pointToPause);
    }
  }, 1000);
}

/* todo this needs to wait on the pause and then resume.
           Currently it just resumes instantly
           as the rest of the code starts which results in errors */
/* function resume () {
  startTimer(pausePoint)
} */
