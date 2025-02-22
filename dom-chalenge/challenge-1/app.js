/**
 * Write your challenge solution here
 */

const toggleButton = document.getElementById('toggleButton');
const statusbar = document.getElementById('status');


toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    if (toggleButton.innerHTML == 'Turn On') {
        toggleButton.innerHTML = 'Turn Off'
        statusbar.innerHTML = 'Status: On'
    } else {
        toggleButton.innerHTML = 'Turn On'   
        statusbar.innerHTML = 'Status: Off'
    }
})
