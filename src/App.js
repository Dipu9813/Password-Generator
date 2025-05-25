import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {UC,LC,NC,SC} from './data/passChar.jsx'

function App() {
let [uppercase,setuppercase]=useState(false);
let [lowercase,setlowercase]=useState(false);
let [numbers,setnumbers]=useState(false);
let [symbols,setsymbols]=useState(false);
let [passwordLen,setPasswordLen]=useState(10);
let [fpass,setfPass]=useState("");

function createPassword(){
  let finalPass = "";
  let charSet = "";
  if(uppercase || lowercase || numbers || symbols){
    if (uppercase) charSet+=UC;
    if(lowercase) charSet+=LC;
    if(numbers) charSet+=NC;
    if(symbols) charSet+=SC;

    for (let i = 0; i < passwordLen; i++) {
      finalPass += charSet.charAt(Math.floor(Math.random()*charSet.length));
    }
    setfPass(finalPass);
  }else{
    alert('please choose at least one checkbox');
  }
}

let copyPass = () =>{
  navigator.clipboard.writeText(fpass);
}

  return (
    <>
    <div className='passwordBox'>
      <h2>Password Generator</h2>
      <div className='passwordBoxIn'>
        <input type="text" value={fpass} readOnly/><button className='copyBtn' onClick={copyPass}>Copy</button> 
      </div>
      <div className='passwordLength'>
        <label>Password Length</label>
        <input type="number" max={20} min={10} value={passwordLen} onChange={(event)=>setPasswordLen(event.target.value)} ></input>
      </div>
      <div className='passwordLength'>
        <label>Include Uppercase</label>
        <input type="checkbox" checked={uppercase} onChange={()=>setuppercase(!uppercase)}></input>
      </div>
      <div className='passwordLength'>
        <label>Include Lowercase</label>
        <input type="checkbox" checked={lowercase} onChange={()=>setlowercase(!lowercase)} ></input>
      </div>
      <div className='passwordLength'>
        <label>Include Numbers</label>
        <input type="checkbox" checked={numbers} onChange={()=>setnumbers(!numbers)} ></input>
      </div>
      <div className='passwordLength'>
        <label>Include Symbols</label>
        <input type="checkbox"  checked={symbols} onChange={()=>setsymbols(!symbols)}></input>
      </div>
      <button className='generatePass' onClick={()=>createPassword()}>Generate Password</button>
    </div>
    </>
  )
}

export default App;
