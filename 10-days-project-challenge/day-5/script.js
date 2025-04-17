const x = document.getElementById('number1')
const y = document.getElementById('number2')
const result = document.getElementById('result')

function calculate(oprator) {
    const num1 = parseInt(x.value)
    const num2 = parseInt(y.value)

    if (isNaN(num1) || isNaN(num2)) {
        result.innerText = 'Please enter the valid number'
        result.style.color = 'red'
        return false
    }
    result.style.color = 'green'

    switch (oprator) {
        case '+':
            result.innerText = `Sum: ${num1 + num2}`
            break;
        case '-':
            result.innerText = `Sub: ${num1 - num2}`
            break;
        case '*':
            result.innerText = `Mul: ${num1 * num2}`
            break;
        case '/':
            if (num2 === 0) {
                result.innerText = `Connot divide by zero`
                result.style.color = 'red'
            }else{
                result.innerText = `Div: ${num1 / num2}`
            }
            break;

        default:
            result.innerText = `Opration failde`
            break;
    }

    x.value = ''
    y.value = ''

}