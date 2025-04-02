const input = document.getElementById('input')
const startBTN = document.getElementById('start')
const displyatime = document.getElementById('displyatime')




function startTimer() {
    let valueInSecond = parseInt(input.value)
    if (isNaN(valueInSecond)) {
        displyatime.innerText = 'Please enter a valid number'
        return
    }
    if (valueInSecond <= 0) {
        displyatime.innerText = 'Please enter second > 0'
        return   
    }
    
    const timer = setInterval(() => {
        input.value = ''
        valueInSecond--
        displyatime.innerText = `timer remening: ${valueInSecond} second`
        
        if (valueInSecond <= 0) {
            clearInterval(timer)
            displyatime.innerText = `timer up `
        }
    }, 1 * 1000);

}

startBTN.addEventListener('click',startTimer)