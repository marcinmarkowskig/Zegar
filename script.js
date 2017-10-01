var h1 = document.querySelector('h1');
var timeNow = '';//tworzę pustą zmienną
var timeText = '12 : 00 : 39';

var clock = setInterval(function () {
    timeNow = new Date();//pobranie aktualnej daty i czasu

    timeText = timeNow.getHours() +
    ' : ' + timeNow.getMinutes() +
    ' : ' + timeNow.getSeconds();

    h1.textContent = timeText;
}, 1000);
