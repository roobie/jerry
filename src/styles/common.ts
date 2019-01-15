import csjs from 'csjs'

import {solarized, spacer} from '@styles/variables'

export const global = csjs`
* {
    box-sizing: border-box;
}
html,body {
    height: 100%;
    background: ${solarized.$base03};
    color: ${solarized.$base3};
}
pre {
    padding: ${spacer};
    border: 1px solid ${solarized.$base01};
    background: ${solarized.$base02};
}
a {color: ${solarized.$blue}}
a:visited {color: ${solarized.$magenta}}
`

export const layout = csjs`
.flex_default {display: flex;}
.col extends .flex_default {flex-direction: column;}
.row extends .flex_default {}

.flex_1 {flex: 1;}
.flex_2 {flex: 2;}
.flex_3 {flex: 3;}
.flex_4 {flex: 4;}
`

export const colors = csjs`
.base03 {color: #002b36;}
.base02 {color: #073642;}
.base01 {color: #586e75;}
.base00 {color: #657b83;}
.base0 {color: #839496;}
.base1 {color: #93a1a1;}
.base2 {color: #eee8d5;}
.base3 {color: #fdf6e3;}
.yellow {color: #b58900;}
.orange {color: #cb4b16;}
.red {color: #dc322f;}
.magenta {color: #d33682;}
.violet {color: #6c71c4;}
.blue {color: #268bd2;}
.cyan {color: #2aa198;}
.green {color: #859900;}
`
