// Countdown Timer
const countdown = () => {
  const targetDate = new Date('April 28, 2025 18:00:00').getTime(); // Set your target date and time
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(interval);
    document.getElementById('timer').innerHTML = "It's time!";
  }
};

const interval = setInterval(countdown, 1000);

// Send Message Button
const sendMessage = () => {
  alert("I love you. Please forgive me. 💕");
};