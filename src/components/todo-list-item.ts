import m from '@share/m'
import {
    ClassComponent,
    CVnode
} from 'mithril'
import csjs from 'csjs'

import {CrudRepository} from '@share/data-flow'
import {renderStyle} from '@share/styles'
import {layout} from '@styles/common'

export const styling = csjs`
.item extends ${layout.row} {
    margin: 1rem;
}
`
renderStyle(null, styling)

export interface TodoListItem {
    description: string
    done: boolean
}

export interface TodoListItemRepository extends CrudRepository<TodoListItem> {
}

interface Attrs {
    item: TodoListItem,
    onItemUpdated: (x: TodoListItem) => void
}

export class TodoListItemComponent implements ClassComponent<Attrs> {
    view ({attrs}: CVnode<Attrs>) {
        return m('div', {class: styling.item}, [
            m('input[type=checkbox]', {
                checked: attrs.item.done,
                onchange: (e: Event) => attrs.onItemUpdated(attrs.item)
            }),
            m('span', attrs.item.description)
        ])
    }
}
