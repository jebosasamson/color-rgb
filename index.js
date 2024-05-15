let container = document.querySelector('body')

// Red Slider
let redSlider = document.querySelector('.red-slider')
let redSliderValue = document.querySelector('.red-slider-value')

let red = 0
let blue = 0
let green = 0


redSlider.addEventListener('change', function(){
    red = redSlider.value
    redSliderValue.textContent = red
    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})


// Blue
let blueSlider = document.querySelector('.blue-slider')
let blueSliderValue = document.querySelector('.blue-slider-value')


function handleblueslider() {
    
    blue = blueSlider.value
    blueSliderValue.textContent = blue
    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`
}
// Green
let greenSlider = document.querySelector('.green-slider')
let greenSliderValue = document.querySelector('.green-slider-value')

function handlegreenslider() {
    
    green = greenSlider.value
    greenSliderValue.textContent = green
    container.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`
}


// addeventlistener
blueSlider.addEventListener('change', handleblueslider)
greenSlider.addEventListener('change', handlegreenslider)





