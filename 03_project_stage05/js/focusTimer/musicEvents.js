import { firstLineMusicButtons, secondLineMusicButtons } from "./elements.js"
import * as actions from './actions.js'

export function registerMusic() {
    firstLineMusicButtons.addEventListener('click', (event)=> {
        const actionMusic = event.target.dataset.action
        if(typeof actions[actionMusic] != "function") {
            return
        } 
        actions[actionMusic]()
        event.stopPropagation()
    })
}
export function registerButton() {
    secondLineMusicButtons.addEventListener('click', (event)=> {
        const actionButton = event.target.dataset.action
        if(typeof actions[actionButton] != "function") {
            return
        }
        actions[actionButton]()
        event.stopPropagation()
    })
}


