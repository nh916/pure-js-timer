# pure-js-timer

This is the first package I have made. Please report any bugs or improvements.

I made this for my own project and saw that I could not find something easy to use on npm that would handle a simple implementation of a JavScript timer for me, so I wrote one with pure JavaScript functions. I figured a timer is a simple code that can often be used in projects, and no need to rewrite it every time.

The code can be refactored to be improved and more efficient, I just have not had the chance to do that. If I get a chance I will be adding more comments and more documentation to make it very simple to understand. 

Feel free to contribute to it, and make it better. Looking forward to seeing others using it and contributing to it!

*pure-js-timer* was originally going to be called *functional-timer* because the timer is made completely from functions, and it would make a fun play on words, but seeing that name was already taken the second good name I came up with that was more descriptive was pure-js-timer.

*MIT License*

# functions

## ```start_timer(amount)``` *or* ```start_timer(amount, id = "timer")```


**takes an (timer amount:int, id:String)**
By defualt the ID is set to "timer" but it can be overwritten to any other ID the developer wants to use

amount is the amount of seconds the developer wants the timer to run for. Example 30 seconds
### Example:
```javascript
      startTimer(90);
```
*or*

```javascript
      startTimer(90, "timer");
```

id is the id of the element that the developer wants to put the timer into
### Example:
```html
      <div id="timer"></div>
```

## ```convert_seconds(s);```
**converts seconds to minutes. For example 65 seconds to 1:05**

## ```pause(point_to_pause);```
**takes a second time, where the developer wants the timer to pause on.**

## ```stopAndClear();```
**It takes nothing and whenever it is called it stops the timer and erases the timer from screen by replacing inside of the div with empty string ""**


Everything here can be found under demoScrip_imported.html for how the pure-js-timer can be used.

demo.html shows the entire js code in the html file and its use
finctionalTimer is the full JS file 


# Demo
##functional-js use demo
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>pure-js-timer demo imported</title>
    <script src="pure-js-timer.js"></script>
</head>

<body>
    <div id="timer"></div>
</body>
<script>
    //if true 72 seconds will appear as 1:12 and count down
    // if false it will appear as 72 seconds and count down
    setMinutesAndSeconds(true);

    //starts the timer with 72 seconds and put results in div with the id of timer
    startTimer(72);

    //timer is set to pause when the timer reaches 30 seconds
    setPausePoint(30);
</script>
</html>
```



*The pure-js-timer is shown being copied and pasted into the html, but this is only for demonstration purposes.
A better practice would be to include it with script and source tags.*

#pure-js-timer JS code and use demo
```html
<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<head>
    <title>pure-js-timer demo</title>
</head>

<!--pure-js-timer javascript part-->
<script type="text/javascript">
let globalTimerInSeconds;
let theTimerInterval;
let elementID;
let minutesAndSeconds = false;

/* sets the amount of globalTimerInSeconds and adds 1 to it
for the user to see that it started from 30 and not 29

*/
function setTimer(timer) {
  if (typeof (timer) !== "number") {
    console.error("setTimer takes in integer for the timer amount. Example: startTimer(30)")
  }
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
    pause(thePausePoint);
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
and once it is it clears the interval
if the timer wants to resume, it then has to be restarted
pause can be called directly, but the setPausePoint setter should be used
*/
function pause(pointToPause) {
  const pausingInterval = setInterval(function() {
    if (globalTimerInSeconds === pointToPause) {
      clearInterval(theTimerInterval);
      clearInterval(pausingInterval);
    }
  }, 1000);
}
</script>
</html>
```
