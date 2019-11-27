import React from 'react'

export default function EvalButton({color, evaluteOperation, incrementColor}) {
    const colors = ['#2b2d2f', "red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    const evalButtonStyle = {
        backgroundColor: colors[color.currentColor],
        width: 210,
        height: 70
    }
    function callBoth() {
        evaluteOperation();
        incrementColor(15);
    }
    return (
        <button onClick={callBoth} style={evalButtonStyle} id={color.id}>{color.id}</button>
    )
}