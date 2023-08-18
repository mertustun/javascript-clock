const userName = prompt('Isminizi giriniz:')
const showUser = document.querySelector('#myName').innerHTML = userName;


/* function showTime() {
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
*/


//The code which is comment format shown above has been written again to not placed those lines like above. It is shortened.  
function localdate() {
    const DatneNow = new Date();
    const currentTime = DatneNow.toLocaleTimeString("tr");
    const dayOfWeek = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"];
    const days = dayOfWeek[DatneNow.getDay()];
    document.getElementById("myClock").textContent = `${currentTime} ${days}`;
}
localdate();

setInterval(localdate, 1000)