export default function() {
  
  const forestAudio = new Audio("../assets/floresta.wav")
  const rainAudio = new Audio("../assets/chuva.wav")
  const coffeShopAudio = new Audio("../assets/cafeteria.wav")
  const fireplaceAudio = new Audio("../assets/lareira.wav")


  forestAudio.loop = true
  rainAudio.loop = true
  coffeShopAudio.loop = true
  fireplaceAudio.loop = true



  return {
    forestAudio,
    rainAudio,
    coffeShopAudio,
    fireplaceAudio
  }

}