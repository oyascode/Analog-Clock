
// Get reference to the hr, min, and sec hands of the clock
const hourHand = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");

// Use JavaScript to set the current date using the date object
const currentDate = new Date();
console.log(currentDate);

// Change it from generic browser date to specific time using methods
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();

console.log(`Hour: ${currentHour} Minute: ${currentMinute} Second: ${currentSecond}`);

// Calculate the varied degrees of the hands of the clock
let hourPosition = (currentHour * (360/12)) + (currentMinute * (360/60) / 12);
let minutePosition = (currentMinute * (360/60)) + (currentSecond * (360/60) / 60);
let secondPosition = currentSecond * (360 / 60);

function runTheClock() {
  // This ensures our clock is not a secondd late
  hourPosition =  hourPosition + (360 / 12) / 3600
  minutePosition = minutePosition + (6/60);
  secondPosition = secondPosition + 6;

  // Style the hands of the clock to varied degrees
  hourHand.style.transform = "rotate(" + hourPosition + "deg)";
  minuteHand.style.transform = "rotate(" + minutePosition + "deg)";
  secondHand.style.transform = "rotate(" + secondPosition + "deg)";
}

const Interval = setInterval(runTheClock, 1000);
