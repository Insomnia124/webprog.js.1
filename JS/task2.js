let count = 0, interval;
document.getElementById('start').addEventListener('click', () => {
    interval = setInterval(() => {
        document.getElementById('counter').innerText = ++count;
    }, 1000);
});
document.getElementById('stop').addEventListener('click', () => {
    clearInterval(interval);
});