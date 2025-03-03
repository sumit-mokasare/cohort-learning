/**
 * Write your challenge solution here
 */

const toggleBtn = document.querySelector('.toggle-btn')
const panel = document.querySelector('.panel')
const closeBtn = document.querySelector('.close-btn')

document.addEventListener('click', () => {
    panel.classList.remove('active');
})
toggleBtn.addEventListener('click', (event) => {
    panel.classList.add('active');
    event.stopPropagation();
})
closeBtn.addEventListener('click', (event) => {
    panel.classList.remove('active');
    event.stopPropagation();
})


