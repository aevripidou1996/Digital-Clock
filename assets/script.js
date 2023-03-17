var hoursEl = document.getElementById("hours");
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");
var amPmEl = document.getElementById("amPm");

function updateClock() {
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var amPm = "AM";

    if (hours >= 12) {
        hours = hours - 12;
        amPm = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hoursEl.innerText = hours;
    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;
    amPmEl.innerText = amPm;

    setTimeout(() => {
        updateClock();
    }, 1000)
}

updateClock();

