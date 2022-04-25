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

const futureDate = new Date(
  presentYear,
  presentMonth,
  presentDay + 10,
  10,
  30,
  50
);

const day = futureDate.getDay();
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = weekdays[futureDate.getDate()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `Giveaway ends on ${day}. ${date} ${month} ${year}, ${hours}:${minutes}am`;

function getRemainingTime() {
  const t = futureDate.getTime() - presentDate.getTime();

  const oneSecond = 1000;
  const oneMinute = 60 * oneSecond;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / oneSecond);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(interval);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
  console.log("I am supposed to be working");
}
let interval = setInterval(getRemainingTime, 1000);
getRemainingTime();
