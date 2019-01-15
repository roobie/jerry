import m from '@share/m'
import {
    ClassComponent,
    CVnode
} from 'mithril'

import {TodoListItem, TodoListItemComponent} from '@components/todo-list-item'

interface Attrs {
    items: TodoListItem[];
}

export class TodoListComponent implements ClassComponent<Attrs> {

    constructor ({attrs}: CVnode<Attrs>) {
    }

    view ({attrs}: CVnode<Attrs>) {
        return m('div', attrs.items.map(item => m(TodoListItemComponent, {item})))
    }
}
