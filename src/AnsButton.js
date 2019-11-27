import React from 'react'

export default function AnsButton({color, addPrevious, incrementColor}) {
    function callBoth() {
        addPrevious();
        incrementColor(14);
    }
    const colors = ['#2b2d2f', "red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    return (
        <button onClick={callBoth}style={{backgroundColor: colors[color.currentColor]}} id={color.id}>{color.id}</button>
    )
}