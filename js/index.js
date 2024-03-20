import Events from './events.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonMinus,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffee,
    buttonSoundFireplace,
    minutesDisplay,
    secondsDisplay,
    forestVolumeSlider,
    rainVolumeSlider,
    coffeeVolumeSlider,
    fireplaceVolumeSlider,
    volumeSlider,
} from './elements.js'


const controls = Controls({
    buttonPlay,
    buttonPause,
    minutesDisplay,
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

Events({
    controls,
    timer,
    sound
})