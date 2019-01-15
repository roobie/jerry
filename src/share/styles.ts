import {getCss} from 'csjs'
import {document} from '@share/dom'

export function renderStyle (element: any, csjsObject: any) {
    if (element === null) {
        element = document.head
    }

    const styleEl = document.createElement('style')
    styleEl.innerHTML = getCss(csjsObject)
    element.appendChild(styleEl)
}

export function renderStyles (element: any, csjsObjects: any[]) {
    if (element === null) {
        element = document.head
    }

    const styleEl = document.createElement('style')
    const allCss = csjsObjects.map(x => getCss(x))
    styleEl.innerHTML = allCss.join('\n')
    element.appendChild(styleEl)
}
