/**
 * Write your challenge solution here
 */

const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const ageInput = document.getElementById('ageInput');
const bioInput = document.getElementById('bioInput');

nameInput.addEventListener('input', (e) => {
    document.getElementById('nameDisplay').innerText = e.target.value || 'Not provided'
})
jobInput.addEventListener('input', (e) => {
    document.getElementById('jobDisplay').innerText = e.target.value || 'Not provided'
})
ageInput.addEventListener('input', (e) => {
    document.getElementById('ageDisplay').innerText = e.target.value || 'Not provided'
})
bioInput.addEventListener('input', (e) => {
    document.getElementById('bioDisplay').innerText = e.target.value || 'Not provided'
})