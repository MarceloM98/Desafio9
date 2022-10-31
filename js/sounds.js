export default function() {
  
  const forestAudio = new Audio("https://github.com/MarceloM98/Desafio9/raw/master/assets/Floresta.wav")
  const rainAudio = new Audio("https://github.com/MarceloM98/Desafio9/raw/master/assets/Chuva.wav")
  const coffeShopAudio = new Audio("https://github.com/MarceloM98/Desafio9/raw/master/assets/Cafeteria.wav")
  const fireplaceAudio = new Audio("https://github.com/MarceloM98/Desafio9/raw/master/assets/Lareira.wav")


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