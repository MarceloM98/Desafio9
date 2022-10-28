import Controls from "./controls.js"
import Sound from "./sounds.js"
import Timer from "./timer.js"

const forestButton = document.querySelector('.sound button:nth-child(1)')
const rainButton = document.querySelector(".sound button:nth-child(2)")
const coffeShopButton = document.querySelector(".sound button:nth-child(3)")
const fireplaceButton = document.querySelector(".sound button:nth-child(4)")
const playButton = document.querySelector('.time-controls button:nth-child(1)')
const stopButton = document.querySelector('.time-controls button:nth-child(2)')
const addTimeButton = document.querySelector('.time-controls button:nth-child(3)')
const removeTimeButton= document.querySelector('.time-controls button:nth-child(4)')
const minutesDisplay = document.querySelector("#minutes")
const secondsDisplay = document.querySelector("#seconds")
let minutes = minutesDisplay.innerText

let soundActive = false

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  minutes
})
const sound = Sound()
const controls = Controls()

forestButton.addEventListener('click', ()=>{
  if(!soundActive ||forestButton.classList.contains('active') ){
    controls.colorChange(forestButton)
    if(forestButton.classList.contains('active')){
      soundActive = true
      sound.forestAudio.play()
    }else{
      soundActive = false
      sound.forestAudio.pause()
    }
  }
})

rainButton.addEventListener('click', ()=>{
  if(!soundActive ||rainButton.classList.contains('active') ){
    controls.colorChange(rainButton)
    if(rainButton.classList.contains('active')){
      soundActive = true
      sound.rainAudio.play()
    }else{
      soundActive = false
      sound.rainAudio.pause()
    }
  }
})

coffeShopButton.addEventListener('click', ()=>{
  if(!soundActive ||coffeShopButton.classList.contains('active') ){
    controls.colorChange(coffeShopButton)
    if(coffeShopButton.classList.contains('active')){
      soundActive = true
      sound.coffeShopAudio.play()
    }else{
      soundActive = false
      sound.coffeShopAudio.pause()
    }
  }
})

fireplaceButton.addEventListener('click', ()=>{
  if(!soundActive ||fireplaceButton.classList.contains('active') ){
    controls.colorChange(fireplaceButton)
    if(fireplaceButton.classList.contains('active')){
      soundActive = true
      sound.fireplaceAudio.play()
    }else{
      soundActive = false
      sound.fireplaceAudio.pause()
    }
  }
})

addTimeButton.addEventListener('click', ()=>{
  controls.addTime(minutesDisplay)
})

removeTimeButton.addEventListener('click', ()=>{
  controls.removeTime(minutesDisplay)
})

playButton.addEventListener('click', ()=>{
  timer.start()

})
stopButton.addEventListener('click', ()=>{
 timer.stop()
})

