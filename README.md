# functional-timer

This is the first package I have made. Please report any bugs or improvements.

I made this for my own project and saw that I could not find something easy to use on npm that would handle a simple implementation of a JavScript timer for me, so I wrote one with pure JavaScript functions. I figured a timer is a simple code that can often be used in projects, and no need to rewrite it every time.

The code can be refactored to be improved and more efficient, I just have not had the chance to do that. If I get a chance I will be adding more comments and more documentation to make it very simple to understand. 

Feel free to contribute to it, and make it better. Looking forward to seeing others using it and contributing to it!

*MIT License*

# functions

## ```start_timer(amount)``` *or* ```start_timer(amount, id = "timer")```


**takes an (int timer amount, String id)**
By defualt the ID is set to timer but it can be overwritten to any other ID the developer wants to use

amount is the amount the developer wants the timer to run for. Example 30 seconds
### Example:
```javascript
      startTimer(90);
```
*or*

```javascript
      startTimer(90, "timer");
```

id is the id of the element that the developer wants to put the timer int
### Example:
```html
      <div id="timer"></div>
```

## ```convert_seconds(s);```
**converts seconds to minutes. For example 65 seconds to 1:05**

## ```pause(point_to_pause);```
**takes a second time where the developer wants the timer to pause on.**

## ```stopAndClear();```
**It takes nothing and whenever it is called it stops the timer and erases the timer from screen by replacing inside of the div with empty string ""**

# Demo
copied and pasted straight from demo.html

*The functional timer is shown being copied and pasted into the html, but this is only for demonstration purposes.
A better practice would be to include it with script and source tags.*

```html
<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<head>
    <title>functional-timer demo</title>
</head>

<!--functional-timer javascript part-->
<script type="text/javascript">
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

</script>
<!--end of functional-timer-->

<body>
    <div id="timer">90</div>
</body>

<!--calling functional-javascript-->
<script type="text/javascript">
    startTimer(90);

</script>

</html>

```
