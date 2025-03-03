/**
 * Write your challenge solution here
 */

let lastSecondDeg = 0;
const clock = document.getElementById('clock')

function updataTimeAndDate() {
    let date = new Date()
    let hh = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    const hourDeg = (hh % 12) * 30 + mm * 0.5;
    const minuteDeg = mm * 6;
    const secondDeg = ss * 6;


    document.querySelector(".hour").style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    document.querySelector(".minute").style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    document.querySelector(".second").style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

    document.getElementById('digitalClock').innerHTML = `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${ss < 10 ? '0' + ss : ss}`

    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    document.querySelector(".date").textContent = date.toLocaleDateString("en-GB", options);
}

// console.log(new Date().getMonth());

setInterval(() => updataTimeAndDate(), 1000);
updataTimeAndDate();