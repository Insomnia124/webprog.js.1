let timeout;
document.getElementById('start').addEventListener('click', () => {
    timeout = setTimeout(() => {
        document.getElementById('message').innerText = "Час вийшов!";
    }, 5000);
});
document.getElementById('stop').addEventListener('click', () => {
    clearTimeout(timeout);
    document.getElementById('message').innerText = "Таймер скасовано";
});