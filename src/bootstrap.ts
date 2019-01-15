import m from '@share/m'
import {RootComponent} from '@components/root'

export function bootstrap () {
    document.addEventListener('DOMContentLoaded', () => {
        m.mount(document.body, RootComponent)
    })
}
