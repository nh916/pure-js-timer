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
      start_timer(90);
```
*or*

```javascript
      start_timer(90, "timer");
```

id is the id of the element that the developer wants to put the timer int
### Example:
```html
      <div id="timer">30</div>
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
<html>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<head>
    <title>functional-timer demo</title>
</head>

<!--functional-timer javascript part-->
<script type="text/javascript">
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
        currentTimer.innerText = "";
        clearInterval(theinterval);
    }


    /*starts the timer
    Takes the amount that the developer wants the timer to run for
    takes the ID that the developer wants to put the timer inside of
    when the timer hits 0 it stops itself*/

    // takes an int timer amount, String id   
    function start_timer(amount, id) {
        set_timer(amount);
        set_id(id);
        timeIt();
        theinterval = setInterval(timeIt, 1000);
    }

    // converts seconds to minutes. For example 65 seconds to 1:05
    function convert_seconds(s) {
        var min = Math.floor(s / 60);
        var seconds = s % 60;

        if (min > 1 && seconds < 10) {
            return min + ":" + "0" + seconds;
        } else {
            return seconds;
        }

        // else if (min > 1 && seconds ) {
        //     return min + ":" + seconds;
        // }
    }

    /*pauses the clock on the second that its said
    checks every second to see if its at the pausing point and once it is it clears the interval*/

    function pause(point_to_pause) {
        setInterval(function() {
            pausing(point_to_pause)
        }, 1000);

        function pausing(point_to_pause) {
            if (This_time === point_to_pause) {
                clearInterval(theinterval)
            }
        }
    }

</script>
<!--end of functional-timer-->

<body>
    <div id="timer">90</div>
</body>

<!--calling functional-javascript-->
<script type="text/javascript">
    start_timer(90, "timer");

</script>

</html>
```
