const weight = document.getElementById('weight')
const height = document.getElementById('height')
const calculate = document.getElementById('calculate')

let category = ''
function calculateBIM() {
    let W = parseFloat(weight.value)
    let H = parseFloat(height.value / 100)
    const BMI = W / (H * H);
    let toFixedBMI = BMI.toFixed(2);
    if (toFixedBMI < 18.5) {
        category = 'Underweight'
    } else if (toFixedBMI < 25) {
        category = "Normal";
    } else if (toFixedBMI < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    document.querySelector('.info-content h2').innerHTML = toFixedBMI
    document.querySelector('.info-content span').innerHTML = category
    height.value = ''
    weight.value = ''
}

calculate.addEventListener('click', () => {
    if (weight.value === '' || height.value === '') {
        alert('invalid inputs')
        return
    }
    calculateBIM()
})
