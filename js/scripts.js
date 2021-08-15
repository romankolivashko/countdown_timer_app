window.onload = function()
{

const daysElem = document.getElementById('days');
const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');

const newYears = '1 Jan 2022';

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 24;
  const seconds = Math.floor(totalSeconds) % 60;

  daysElem.innerHTML = days;
  hoursElem.innerHTML = hours;
  minutesElem.innerHTML = minutes;
  secondsElem.innerHTML - seconds;

  // console.log(newYearsDate - currentDate);
  console.log(days, hours, minutes, seconds);
}

//initial call
countdown();
setInterval(countdown, 1000);

}