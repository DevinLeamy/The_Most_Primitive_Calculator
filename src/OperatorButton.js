//Function that controls the operators

import React from 'react'

export default function OperatorButton({color, handleOperationChoice, incrementColor}) {
    function callBoth() {
        if (color.id === '+') {incrementColor(0)}
        if (color.id === '-') {incrementColor(5)}
        if (color.id === '*') {incrementColor(10)}
        handleOperationChoice(color.id);
    }
    const colors = ['#2b2d2f', "red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    return (
        <button onClick={callBoth}style={{backgroundColor: colors[color.currentColor]}} id={color.id}>{color.id}</button>
    )
}