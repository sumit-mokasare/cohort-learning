const colorInput = document.getElementById('colorInput')
const colorCode = document.getElementById('colorCode')
const copyButton = document.getElementById('copyButton')
const complementaryContainer = document.getElementById('complementaryContainer')
const saveColorButton = document.getElementById('saveColorButton')
const favoritesContainer = document.getElementById('favoritesContainer')



colorInput.addEventListener('input', () => {
    const seletedColor = colorInput.value
    updateColorDisplay(seletedColor)
    showComplimetryColor(seletedColor)
})

function updateColorDisplay(color) {
    colorCode.textContent = color
    colorCode.style.color = color
}

function showComplimetryColor(color) {
    const complimentoryColors = getComplimentorColor(color)
     complementaryContainer.textContent= ''
     complimentoryColors.forEach((compColor)=>{
        const colorBox = document.createElement('div')
        colorBox.classList.add('color-box')
        colorBox.style.backgroundColor = compColor
        complementaryContainer.appendChild(colorBox)
     })     
}

function getComplimentorColor(color) {
    const base = parseInt(color.slice(1) , 16)
    const compliment = (0xFFFFFF ^ base).toString(16).padStart(6 , '0')
    return [`#${compliment}`]
}


copyButton.addEventListener('click',()=>{
    navigator.clipboard.writeText(colorCode.textContent)
    .then(()=>alert('color code copied'))
    .catch((err)=> console.error('failed to copy' , err))
})

saveColorButton.addEventListener('click',()=>{
    const color = colorCode.textContent
    addFevouriteColor(color)
})

function addFevouriteColor(color) {
    const colorBox = document.createElement('div')
    colorBox.classList.add('color-box')
    colorBox.style.backgroundColor = color
    colorBox.title = color
    favoritesContainer.appendChild(colorBox)
}
