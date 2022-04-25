//Selectors of dom
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const seconds = document.getElementById('seconds');

const birthDay = '12 Aug 2023';

function countdown() {
    const newYearsDate = new Date(birthDay);
    const currentDate = new Date();

    const totalSecond = (newYearsDate - currentDate) / 1000;

    const day = Math.floor(totalSecond / 3600 / 24);

    const hour = Math.floor(totalSecond / 3600) % 24;

    const min = Math.floor(totalSecond / 60) % 60;

    const second = Math.floor(totalSecond) % 60;
    
    days.innerHTML = day;
    hours.innerHTML = formatTime(hour);
    mins.innerHTML = formatTime(min);
    seconds.innerHTML = formatTime(second);

}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);