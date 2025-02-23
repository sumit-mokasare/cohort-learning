/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carouselTrack = document.getElementById("carouselTrack");
const caption = document.getElementById("caption");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const carouselNav = document.getElementById("carouselNav");
const autoPlayButton = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

let curruntIndex = 0;
let isAutoPlay = false;
let setIntervalTime;
let count;
images.forEach((item, index) => {
  let slides = document.createElement('div')
  slides.style.backgroundImage = `url(${item.url})`
  slides.classList.add('carousel-slide')
  carouselTrack.appendChild(slides)

  let dot = document.createElement('div')
  dot.classList.add('carousel-indicator')

  if (index == 0) dot.classList.add('active')
  dot.addEventListener('click', () => goToSlide(index))
  carouselNav.appendChild(dot)
  captionUpdatas();
})

function goToSlide(index) {
  curruntIndex = index;
  carouselTrack.style.transform = `translateX(-${index * 100}%)`
  document.querySelectorAll('.carousel-indicator').forEach((dot, i) => {
    dot.classList.toggle('active', i == index)
  })
  captionUpdatas();
}

function captionUpdatas(params) {
  caption.textContent = images[curruntIndex].caption
}

prevButton.addEventListener('click', () => {
  curruntIndex = (curruntIndex - 1 + images.length) % images.length
  goToSlide(curruntIndex)

})
nextButton.addEventListener('click', () => {
  curruntIndex = (curruntIndex + 1) % images.length
  goToSlide(curruntIndex)
})


function startAutoPlay() {
  isAutoPlay = true
  autoPlayButton.textContent = 'Stop Auto play'
  startCountDown();
}

function startCountDown() {
  count = 5;
  timerDisplay.textContent = `Next slide in ${count}s`
  setIntervalTime = setInterval(() => {
    count--
    timerDisplay.textContent = `Next slide in ${count}s`
    if (count <= 1) {
      count = 5 + 1;
      nextButton.click();
    }
  }, 1000)
}

function stopAutoPlay() {
  clearInterval(setIntervalTime);
  isAutoPlay = false
  count = 5
  timerDisplay.textContent = ''
  autoPlayButton.textContent = 'start Auto play'
}

autoPlayButton.addEventListener('click', () => {
  if (isAutoPlay) {
    stopAutoPlay()
  } else {
    startAutoPlay();
  }
})