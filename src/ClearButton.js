//Function that controls the operators

import React from 'react'

export default function ClearButton({color, clearWindow, incrementColor}) {
    function callBoth() {
        clearWindow();
        incrementColor(9);
    }
    const colors = ['#2b2d2f', "red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    return (
        <button onClick={callBoth}style={{backgroundColor: colors[color.currentColor]}} id={color.id}>{color.id}</button>
    )
}