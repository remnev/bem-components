({
    mustDeps: [
        { block: 'jquery', elem: 'pointerclick' },
        { block: 'i-bem', elems: ['dom'] }
    ],
    shouldDeps: {
        elems: [ 'text' ],
        mods: {
            'focused': 'yes',
            'hovered': 'yes',
            'disabled': 'yes',
            'pressed': 'yes'
        }
    }
})
