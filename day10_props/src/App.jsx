import { useState } from "react";

//ColourBox
function ColourBox ({colour, pickColor}){
  return (<>
  <button
  onClick={()=>{pickColor(colour)}}
  style={
    {
    color:'white',
    width:'50px',
    aspectRatio:1,
    background:colour,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:'7px',
    borderWidth:"1px",
    borderStyle:"solid",
    borderColor:'white',
    cursor:'pointer'
    }}>{colour}</button>
  </>)
}
//COLOUR PICKER
function Colour ({pickColor}){

  return (<>
  <div style={
    {
      padding:'3px',
      borderColor:'white',
      borderWidth:'1px',
      borderStyle:'solid',
      borderRadius:'10px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      gap:'5px'
    }
    }>
    <ColourBox colour="red" pickColor={pickColor}/>
    <ColourBox colour="green" pickColor={pickColor}/>
    <ColourBox colour="blue" pickColor={pickColor}/>
  </div>
  </>)
}

//TIMER
function Timer ({color}) {
  return (<>
  <h1 style={{color:color}}>12:05 AM</h1>
  </>)
}

//CLOCK
function Clock () {  
const [currentColor, setColor] = useState('white');


  return (<>
  <h1>CLOCK</h1>
  <Colour pickColor={setColor}/>
  <Timer color={currentColor}/>
  </>);
}

export default function Project () {
return <Clock />
}