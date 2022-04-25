const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
const giveaway = document.querySelector(".giveaway");

let presentDate = new Date();
let presentYear = presentDate.getFullYear();
let presentMonth = presentDate.getMonth();
let presentDay = presentDate.getDate();

const date = new Date(presentYear, presentMonth, presentDay + 10, 12, 35);

const deadlineDate = date.getDate();
const deadlineYear = date.getFullYear();
const deadlineHour = date.getHours();
const deadlineMinutes = date.getMinutes();
let deadlineDay = date.getDay();
deadlineDay = weekdays[deadlineDay];
let deadlineMonth = date.getMonth();
deadlineMonth = months[deadlineMonth];

giveaway.textContent = `giveaway ends on ${deadlineDay}, ${deadlineDate} ${deadlineMonth} ${deadlineYear}, ${deadlineHour}:${deadlineMinutes}am`;

// const futureDate = new Date();
// const days = futureDate.getDays();
// const hours = futureDate.getHours();
// const minutes = futureDate.getMinutes();
const future = date.getTime();

function getRemaining() {
  const today = new Date().getTime();
  const time = future - today;
  let oneSec = 1000;
  let oneMin = 60 * oneSec;
  let oneHour = 60 * oneMin;
  let oneDay = 24 * oneHour;

  let day = Math.floor(time / oneDay);
  let hour = Math.floor((time % oneDay) / oneHour);
  let minute = Math.floor((time % oneHour) / oneMin);
  let sec = Math.floor((time % oneMin) / oneSec);
  let values = [day, hour, minute, sec];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }
  if (time < 0) {
    clearInterval(interval);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
}
let interval = setInterval(getRemaining, 1000);
getRemaining();
