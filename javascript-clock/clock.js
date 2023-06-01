const userName = prompt('Isminizi giriniz:')
const showUser = document.querySelector('#myName').innerHTML = `${userName}`;


function showTime() {
    let myclock = document.querySelector('#myClock');
    //date object is created..
    let currentTime =  new Date();
    // Local time components is coded below..
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let day = currentTime.getDay();

    let dayOfWeek = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"];
    let dayToString = dayOfWeek[day];

    let showClock = 
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds) + "  " + 
    dayToString;

    myclock.innerHTML = showClock;

    setTimeout(showTime, 1000);
}