

import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom'
import Window from './Window'
import './App.css'
import Buttons from './Buttons' 

function App() {

  const [currentColors, setCurrentColors] = useState([
    {currentColor : 0, id: '+'}, //0
    {currentColor : 0, id: '1'}, //1
    {currentColor : 0, id: '4'}, //2
    {currentColor : 0, id: '7'}, //3
    {currentColor : 0, id: '0'}, //4
    {currentColor : 0, id: '-'}, //5
    {currentColor : 0, id: '2'}, //6
    {currentColor : 0, id: '5'}, //7
    {currentColor : 0, id: '8'}, //8
    {currentColor : 0, id: 'clear'},
    {currentColor : 0, id: '*'},
    {currentColor : 0, id: '3'},
    {currentColor : 0, id: '6'},
    {currentColor : 0, id: '9'},
    {currentColor : 0, id: 'ans'},
    {currentColor : 0, id: '='},
    {currentColor : 0, id: '+'},
  ])
  const [values, setValues] = useState(" ")
  const [firstTerm, setFirstTerm] = useState("")
  const [secondTerm, setSecondTerm] = useState("")
  const [currentOperation, setCurrentOperation] = useState("");
  const [previous, setPrevious] = useState(-1)
  
  // Adds number to window
  function handleNumClick(num) {
    if (currentOperation !== "") {
      setSecondTerm(secondTerm + num)
    }
    setValues(values + num)
  }
  function clearWindow() {
    setValues("")
    setFirstTerm("")
    setSecondTerm("")
    setCurrentOperation("")
  }
  function addPrevious() {
    handleNumClick("" + previous)
  }

  function handleOperationChoice(operation) {
    if (currentOperation !== "") return
    setCurrentOperation(operation)
    setFirstTerm(values)
    if (operation === "+") {
      setValues(values + " + ")
    } else if (operation === "-") {
      setValues(values + " - ");
    } else {
      setValues(values + " * ")
    }
  }
  function changeColors() {
    var found = false;
    // for (var i = 0; i < 16; i++) {
      
    //     if (currentColors[i].currentColor !== 0) {
    //       for (var j = 0; j < 16; j++) {
    //         console.log(currentColors[i].currentColor)
    //         found = true;
    //           currentColors[(i+1)%16].currentColor = (currentColors[i].currentColor + 1) % 8;
    //           // currentColors[i].currentColor = 0;
    //           // setCurrentColors(currentColors);
    //           i++;
    //           i %= 16;
    //       }
    //       return true;
    //     }
    // }
    
    return found;
  }
  function incrementColor(num) {
    // currentColors[num].currentColor = (currentColors[num].currentColor + 1) % 8;
    // setCurrentColors(currentColors);
    // // while (true) {
    // changeColors();
    // //   if (!found) {break;}
    // // }
  }

  function evaluteOperation() {
    if (firstTerm === "" || currentOperation === "" || secondTerm === "") {return}  
    console.log(firstTerm  + " " + currentOperation + " " + secondTerm)  
    var output = parseInt(firstTerm)
    if (currentOperation === "+") {
      output += parseInt(secondTerm);
    } else if (currentOperation === "-") {
      output -= parseInt(secondTerm);
    } else {
      output *= parseInt(secondTerm)
    }
    console.log(output)
    setPrevious(output)
    setValues(output)
    setFirstTerm("")
    setCurrentOperation("")
    setSecondTerm("")
  }

  return (
    <div className="App" style={{textAlign: "center", alignItems:"center"}}>
      <div><h1 style={{fontWeight: "normal"}}>The Most Primitive Calculator</h1></div>
      
      <div>
        <Window values={values} />
      </div>

      <div>
        <Buttons 
          handleNumClick={handleNumClick} 
          handleOperationChoice={handleOperationChoice}
          evaluteOperation={evaluteOperation}
          currentColors={currentColors} 
          clearWindow={clearWindow}
          addPrevious={addPrevious}
          setCurrentColors={currentColors}
          changeColors={changeColors}
          incrementColor={incrementColor}
        />
      </div>

      <div>
        <h3 style={{fontWeight: "normal"}}>I Have Seen Other Calculators</h3>
        <p>Trust Me... The Claim Holds True</p>
      </div>
    </div>
  );
}

export default App;
