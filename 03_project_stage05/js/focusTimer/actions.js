import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'


export function toggleRunning() {
    state.isRunning = true
    timer.countdown()

}
export function togglePause() {
    state.isRunning = false

}
export function setPlus() {
    let minutes = Number(el.minutes.textContent)
    minutes += 5
    timer.updateDisplay(minutes)
}
export function setMinus() {
    let minutes = Number(el.minutes.textContent)
    minutes -= 5
    if(minutes < 0) {
        return
    } else if (minutes > 0 && minutes < 5) {
        minutes = 0
    }
    timer.updateDisplay(minutes)

}
export function toggleTree() {
    state.isMute = document.querySelector('.ph.ph-tree-evergreen').classList.toggle('activeIcon')
    state.isMute = document.querySelector('.icon.tree').classList.toggle('active')
    if(state.isMute) {
        sounds.forest.play()
        return
    }
    sounds.forest.pause()
}
export function toggleCoffee() {
    state.isMute = document.querySelector('.ph.ph-coffee').classList.toggle('activeIcon')
    state.isMute = document.querySelector('.icon.coffee').classList.toggle('active')
    if(state.isMute) {
        sounds.coffee.play()
        return
    }
    sounds.coffee.pause()
}
export function toggleCloud() {
    state.isMute = document.querySelector('.ph.ph-cloud-snow').classList.toggle('activeIcon')
    state.isMute = document.querySelector('.icon.cloud').classList.toggle('active')
    if(state.isMute) {
        sounds.rain.play()
        return
    }
    sounds.rain.pause()
}
export function toggleCampfire() {
    state.isMute = document.querySelector('.ph.ph-campfire').classList.toggle('activeIcon')
    state.isMute = document.querySelector('.icon.campfire').classList.toggle('active')
    if(state.isMute) {
        sounds.campFire.play()
        return
    }
    sounds.campFire.pause()
}