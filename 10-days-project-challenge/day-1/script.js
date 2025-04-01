function upDateClock(params) {
    const  clock = document.getElementById('clock')
    const date = document.getElementById('date')

    let now = new Date()
    let Hour = now.getHours() % 12 || 12 ;
    let minut = now.getMinutes().toString().padStart(2 , '0');
    let second = now.getSeconds().toString().padStart(2 , '0');
    let ampm = now.getHours >= 12 ? "PM" : "AM";

    clock.innerText = `${Hour}:${minut}:${second}: ${ampm}`
    
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }

    let getDate = now.toLocaleDateString(undefined , options )
    
    date.innerText = getDate
    
}
upDateClock();
setInterval(upDateClock, 1000);