import m from '@share/m'
import {document} from '@share/dom'
import {renderStyle, renderStyles} from '@share/styles'
import {global, layout, colors} from '@styles/common'
import {RootComponent, styling as rootStyling} from '@components/root'

export function run () {
    document.addEventListener('DOMContentLoaded', () => {
        renderStyles(document.head, [
            global,
            layout,
            colors,
        ])
        renderStyle(document.head, rootStyling)
        m.mount(document.body, RootComponent)
    })
}
