import { controls } from "./elements.js"
import * as actionsMusic from './actions.js'


export function registerControls() {
    controls.addEventListener('click', (event)=> {
        const action = event.target.dataset.action
        if(typeof actionsMusic[action] != "function") {
            return
        }

        actionsMusic[action]()
    })
}
