import {List, list, nth} from 'list'

export interface CrudRepository<T> {
    // weird Emacs/typescript(tide) parser error here without semicolon
    getAll (): List<T>;
    get (id: number): T
    put (item: T): T
    post (item: T): T
    patch (id: number, data: Partial<T>): T
    delete (id: number): void
}

export interface AsyncCrudRepository<T> {
    // weird Emacs/typescript(tide) parser error here without semicolon
    getAll (): Promise<List<T>>;
    get (id: number): Promise<T>
    put (item: T): Promise<T>
    post (item: T): Promise<T>
    patch (id: number, data: Partial<T>): Promise<T>
    delete (id: number): Promise<void>
}

export class DefaultCrudRepository<T> implements CrudRepository<T> {
    private data: List<T>

    constructor (initial: List<T>) {
        this.data = initial || list<T>()
    }

    getAll () {
        return this.data
    }

    get (id: number) {
        return nth(id, this.data)
    }

    put (item: T) {
        return item
    }

    post (item: T) {
        return item
    }

    patch (id: number, data: Partial<T>): T {
        return nth(0, this.data)
    }

    delete (id: number) {
    }
}
