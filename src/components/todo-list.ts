import m from '@share/m'
import {
    ClassComponent,
    CVnode
} from 'mithril'

import {TodoListItem, TodoListItemComponent} from '@components/todo-list-item'
import { CrudRepository } from '@share/data-flow';

interface Attrs {
    // items: TodoListItem[];
    repo: CrudRepository<TodoListItem>
}

export class TodoListComponent implements ClassComponent<Attrs> {

    constructor ({attrs}: CVnode<Attrs>) {
    }

    view ({attrs}: CVnode<Attrs>) {
        const children = attrs.repo.getAll()
            .map((item: TodoListItem) => m(TodoListItemComponent, {
                item,
                onItemUpdated: (updatedItem: TodoListItem) =>
                    attrs.repo.put(updatedItem)
            }))
        return m('div', children)
    }
}
