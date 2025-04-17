
const billAmountInput = document.getElementById('billAmount')
const tipPercentageInput = document.getElementById('tipPercentage')
const numPeopleInput = document.getElementById('numPeople')
const calculateButton = document.getElementById('calculateButton')
const totalTipDisplay = document.getElementById('totalTip')
const tipPerPersonDisplay = document.getElementById('tipPerPerson')

calculateButton.addEventListener('click', calculateTip)

function calculateTip() {
    const billAmount = parseInt(billAmountInput.value)
    const tipPercentage = parseInt(tipPercentageInput.value)
    const numPeople = parseInt(numPeopleInput.value)

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople)) {
        alert('Please enter valid values for all fields')
        return false;
    }

    const totalTip = (billAmount * tipPercentage) / 100
    const tipPerPerson = totalTip / numPeople  
    
    totalTipDisplay.innerText = `Total tip: $${totalTip.toFixed(2)}`
    tipPerPersonDisplay.innerText = `Tip for each member is: $${tipPerPerson.toFixed(2)}`
}
