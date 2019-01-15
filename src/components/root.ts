import m from '@share/m'
import {CounterComponent} from '@components/counter'
import {DebugComponent} from '@components/debug'

export class RootComponent {
    view () {
        const data = {hello: 'there'}
        return m('div', [
            m(CounterComponent, { name: 'test', initialValue: 1 }),
            m(DebugComponent, { data })
        ])
    }
}
