import m from '@share/m'
import csjs from 'csjs'
import {List, list} from 'list'

import {renderStyle} from '@share/styles'
import {layout} from '@styles/common'

import {globalState} from '@services/global-state'

import {DebugComponent} from '@components/debug'
import {TodoListComponent} from '@components/todo-list'
import {TodoListItem} from '@components/todo-list-item'
import {DefaultCrudRepository} from '@share/data-flow';

export const styling = csjs`
.root extends ${layout.col}, ${layout.flex_1} {
}
`

renderStyle(null, styling)

function randomInt (max: number): number {
    return Math.floor(Math.random() * max)
}
type Junk = any
function range (len: number): Junk[] {
    return new Array(len).join(' ').split(' ')
}
function randomChar (): string {
    return String.fromCharCode(0x20 + randomInt(0x7e - 0x20))
}
function randomString (len: number): string {
    return range(len).map(randomChar).join('')
}
const randomItems = range(1000).map(_ => ({
    description: range(10).map(() => randomString(4 + randomInt(10))).join(' '),
    done: randomInt(100) < 7
}))

export class RootComponent {
    view () {
        return m('div', {class: styling.root}, [
            m(TodoListComponent, {
                repo: new DefaultCrudRepository<TodoListItem>(list(...randomItems))
            }),
            m('a', {href: 'https://news.ycombinator.com'}, 'Hacker News'),
            m(DebugComponent, { data: globalState.debugData }),
        ])
    }
}

