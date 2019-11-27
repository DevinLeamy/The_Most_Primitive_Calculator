//Holds all of the calculators buttons 

import React from 'react'
import Button from './Button'
import OperatorButton from './OperatorButton'
import ClearButton from './ClearButton'
import AnsButton from './AnsButton'
import EvalButton from './EvalButton'

export default function Buttons({incrementColor, changeColors, evaluteOperation, addPrevious, clearWindow, currentColors, handleNumClick, handleOperationChoice}) {
    return (
    <>
    <div>
    <div id="operators">
        <OperatorButton incrementColor={incrementColor} handleOperationChoice={handleOperationChoice} color={currentColors[0]}/>
        <OperatorButton incrementColor={incrementColor} handleOperationChoice={handleOperationChoice} color={currentColors[5]}/>
        <OperatorButton incrementColor={incrementColor} handleOperationChoice={handleOperationChoice} color={currentColors[10]}/>
      </div>
      <div id='numbers1to3'>
        <Button incrementColor={incrementColor} handleNumClick={handleNumClick} color={currentColors[1]} />
        <Button incrementColor={incrementColor} handleNumClick={handleNumClick} color={currentColors[6]} />
        <Button incrementColor={incrementColor} handleNumClick={handleNumClick} color={currentColors[11]} />
      </div> 
      
      <div id="numbers4to6">
        <Button incrementColor={incrementColor} handleNumClick={handleNumClick} color={currentColors[2]} />
        <Button incrementColor={incrementColor} handleNumClick={handleNumClick} color={currentColors[7]} />
        <Button incrementColor={incrementColor} handleNumClick={handleNumClick} color={currentColors[12]} />
      </div>
      
      <div id="numbers7to9">
        <Button incrementColor={incrementColor} handleNumClick={handleNumClick} color={currentColors[3]} />
        <Button incrementColor={incrementColor} handleNumClick={handleNumClick} color={currentColors[8]} />
        <Button incrementColor={incrementColor} handleNumClick={handleNumClick} color={currentColors[13]} />
      </div>
      
      <div>
        <Button incrementColor={incrementColor} handleNumClick={handleNumClick} color={currentColors[4]} />
        <ClearButton incrementColor={incrementColor} color={currentColors[9]} clearWindow={clearWindow} />
        <AnsButton incrementColor={incrementColor} addPrevious={addPrevious} color={currentColors[14]} />
      </div>
      <div>
        <EvalButton incrementColor={incrementColor} evaluteOperation={evaluteOperation} color={currentColors[15]} />
        {/* <button id='15'style={{width: 210}}onClick={evaluteOperation}>=</button> */}
      </div>
      </div>
      </>
    )
}