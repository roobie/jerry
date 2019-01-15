import m from '@share/m'
import {
    ClassComponent,
    CVnode
} from 'mithril'

export interface TodoListItem {
    description: string
    done: boolean
}

interface Attrs {
    item: TodoListItem
}

export class TodoListItemComponent implements ClassComponent<Attrs> {
    view ({attrs}: CVnode<Attrs>) {
        return m('div', [
            m('input[type=checkbox]', {checked: attrs.item.done}),
            m('span', attrs.item.description)
        ])
    }
}
