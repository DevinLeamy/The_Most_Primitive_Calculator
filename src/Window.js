//Window that displays the numbers and operators

import React from 'react'

export default function Window({values}) {
    return (
        <div style={{width:210,
            height: 70,
            backgroundColor: '#2b2d2f',
            color: 'white',
            float: "center",
            marginLeft: "auto",
            marginRight: "auto"
        }}>
            <label style={{fontSize: 30}}> 
                {values}
            </label>
        </div>
    )
}