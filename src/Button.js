//Holds the number buttons
//Need to add onClick Functions

import React from 'react'

export default function Button({color, handleNumClick, incrementColor}) {
    const colors = ['#2b2d2f', "red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    function callBoth() {
        if (color.id === '1') {incrementColor(1);}
        if (color.id === '2') {incrementColor(6);}
        if (color.id === '3') {incrementColor(11);}
        if (color.id === '4') {incrementColor(2);}
        if (color.id === '5') {incrementColor(7);}
        if (color.id === '6') {incrementColor(12);}
        if (color.id === '7') {incrementColor(3);}
        if (color.id === '8') {incrementColor(8);}
        if (color.id === '9') {incrementColor(13);}
        if (color.id === '0') {incrementColor(4);}
        handleNumClick(color.id)
    }
    return (
        <button onClick={callBoth} style={{backgroundColor: colors[color.currentColor]}} id={color.id}>{color.id}</button>
    )
}