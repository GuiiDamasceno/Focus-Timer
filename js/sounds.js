export default function() {
    const buttonPressAudio = new Audio('./assets/assets_button-press.wav')
    const kichenTimer = new Audio('./assets/assets_kichen-timer.mp3')
    const bgAudio = new Audio('./assets/assets_bg-audio.mp3')
    const forestAudio = new Audio('./assets/floresta.wav')
    const rainAudio = new Audio('./assets/chuva.wav')
    const coffeeAudio = new Audio('./assets/cafeteria.wav')
    const fireplaceAudio = new Audio('./assets/lareira.wav')

    bgAudio.loop = true
    forestAudio.loop = true
    rainAudio.loop = true
    coffeeAudio.loop = true
    fireplaceAudio.loop = true

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kichenTimer.play()
    }

    function resetSounds() {
        forestAudio.pause()
        rainAudio.pause()
        coffeeAudio.pause()
        fireplaceAudio.pause()
    }

    return {
        pressButton,
        timeEnd,
        resetSounds,
        bgAudio,
        forestAudio,
        rainAudio,
        coffeeAudio,
        fireplaceAudio
    }
}