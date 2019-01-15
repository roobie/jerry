import m from '@share/m'
import {Component, Vnode} from 'mithril'

interface Attrs {
    name: string
    initialValue: number
}

interface State {
    count: number
    increment(): void
    decrement(): void
}

type MyVnode = Vnode<Attrs, State>

export const CounterComponent: Component<Attrs, State> = {
    oninit ({state}: MyVnode) {
        state.count = 0
        state.increment = () => {state.count++}
        state.decrement = () => {state.count--}
    },
    view ({attrs, state}: MyVnode) {
        return m('.counter', [
            m('span', `name: ${attrs.name}, count: ${state.count}`),
            m('button', {onclick: state.increment}, '+'),
            m('button', {onclick: state.decrement}, '-')
        ]
                )
    }
}
