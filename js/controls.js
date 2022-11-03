export default function (){
  function colorChange(button){
    button.classList.toggle('sound-controls-active')
    button.firstElementChild.classList.toggle('svg-active')
    button.classList.toggle('active')
  }

  function addTime(minutes){
    minutes.innerText = Number(minutes.innerText) + 5
    if (Number(minutes.innerText) < 10){
      minutes.innerText = String(minutes.innerText).padStart(2, "0")
    }
  }

  function removeTime(minutes){
    if(Number(minutes.innerText) >= 5){
      minutes.innerText = Number(minutes.innerText) - 5
    }
    if (Number(minutes.innerText) < 10){
      minutes.innerText = String(minutes.innerText).padStart(2, "0")
    }
  }


  return {
    colorChange,
    addTime,
    removeTime
  }
}
