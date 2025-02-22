/**
 * Write your challenge solution here
 */
const colorButtons = document.querySelectorAll('.color-buttons button') 
const mainHeading = document.getElementById('mainHeading') 

colorButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        let color = btn.textContent;
        if (color === 'Reset') {
            mainHeading.style.color = 'black'
        }else{
            mainHeading.style.color = color;
        }
    })    
})
