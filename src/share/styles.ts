import {getCss} from 'csjs'

export function renderStyle (element: any, csjsObject: any) {
    const styleEl = document.createElement('style')
    styleEl.innerHTML = getCss(csjsObject)
    element.appendChild(styleEl)
}

export function renderStyles (element: any, csjsObjects: any[]) {
    const styleEl = document.createElement('style')
    const allCss = csjsObjects.map(x => getCss(x))
    styleEl.innerHTML = allCss.join('\n')
    element.appendChild(styleEl)
}
