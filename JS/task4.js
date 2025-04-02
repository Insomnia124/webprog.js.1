import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate;
const startBtn = document.getElementById("start");
flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (userSelectedDate < new Date()) {
            alert("Please choose a date in the future");
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
        }
    }
});
startBtn.addEventListener("click", () => {
    let interval = setInterval(() => {
        let now = new Date();
        let diff = userSelectedDate - now;
        if (diff <= 0) {
            clearInterval(interval);
            return;
        }
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let seconds = Math.floor((diff / 1000) % 60);
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }, 1000);
});