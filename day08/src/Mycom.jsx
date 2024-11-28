import MakeIcons from './MakeIcons.jsx'
import {Icons} from './assets/icons.jsx'

export default function Mycom(){
  return (
    <>
    <div style={
      {
         width:"200px",
        //  height:"100px",
         display:"flex", 
         justifyContent:"left",
         justifyContent:"center",
         flexDirection:"column",
         gap:"2px",
      
         }}>
       <h1>Icons</h1>
       <MakeIcons iconUI={Icons}/>
           </div>
    </>
  )
}