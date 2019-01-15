import m from '@share/m'
import csjs from 'csjs'

import {layout} from '@styles/common'

import {globalState} from '@services/global-state'

import {DebugComponent} from '@components/debug'
import {TodoListComponent} from '@components/todo-list'

export const styling = csjs`
.root extends ${layout.col}, ${layout.flex_1} {
}
`

export class RootComponent {
    view () {
        return m('div', {class: styling.root}, [
            m(TodoListComponent, {
                items: [
                    {description: 'Hello', done: false}
                ]
            }),
            m('a', {href: 'https://news.ycombinator.com'}, 'Hacker News'),
            m(DebugComponent, { data: globalState.debugData }),
        ])
    }
}

