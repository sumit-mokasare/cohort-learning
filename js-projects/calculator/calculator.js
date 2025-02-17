const buttons = document.querySelectorAll('form div input')
const displayInput = document.querySelector('.display-input input')
let string = ''
function calculatFn(buttonVal) {
    if (buttonVal === '=') {
        try {
            string = eval(string).toString();
        } catch (error) {
            string = "Error";
        }
        displayInput.value = string;
        return
    }

    if (buttonVal === 'AC') {
        string = ''
        displayInput.value = ''
        return
    }

    if (buttonVal === 'DE') {
        console.log('dfdf'+string);
        
        string = string.slice(0, -1);
        displayInput.value = string
        return
    }

    string += buttonVal
    displayInput.value = string
}
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        calculatFn(btn.value)
    })
})
