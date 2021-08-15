const newYears = '1 Jan 2022';

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  // console.log(newYearsDate - currentDate);
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 24;
  const seconds = Math.floor(totalSeconds) % 60;
  
  
  console.log(days, hours, minutes, seconds);
}

//initial call
countdown();
setInterval(countdown, 1000);