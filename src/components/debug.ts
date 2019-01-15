import m from '@share/m'
import {
    ClassComponent,
    CVnode
} from 'mithril'

interface Attrs {
    data: any;
}

export class DebugComponent implements ClassComponent<Attrs> {
    private data: any

    constructor ({attrs: {data: input}}: CVnode<Attrs>) {
        this.data = input
    }

    view () {
        return m('div.debug', [
            m('pre', [JSON.stringify(this.data)])
        ])
    }
}
