// Get Element by ID
const dateEl = document.getElementById("clock get-date");
const monthEl = document.getElementById("clock get-months");
const dayEl = document.getElementById("clock get-days");
const ampmEl = document.getElementById("clockget-ampm");
const hourEl = document.getElementById("clock get-hour");
const minuteEl = document.getElementById("clock get-minute");
const secondEl = document.getElementById("clock get-second");

// Get Time function
function setDate() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentTime = new Date();
  let dates = currentTime.getDate();
  let months = month[currentTime.getMonth()];
  let day = weekday[currentTime.getDay()];
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  seconds = seconds < 10 ? "0" + seconds : seconds;

  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;

  dateEl.innerText = dates;
  monthEl.innerText = months;
  dayEl.innerText = day;
  ampmEl.innerText = ampm;
  hourEl.innerText = hours;
  minuteEl.innerText = minutes;
  secondEl.innerText = seconds;
}
// setInterval for refreshing the clock
setInterval(setDate, 1000);

setDate();
