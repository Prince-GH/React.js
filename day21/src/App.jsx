import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initalValue = [
  {id:0,name:'Apple'},
  {id:1,name:'Banana'},
  {id:2,name:'PineApple'},
] 
let nextIdx = initalValue.length;
function App() {
  const [name, setName] = useState('');
  const [items, setItems] = useState(initalValue);
  
  function handleReverseItems(){
    const copyItems = [...items];
    copyItems.reverse(); 
    setItems(copyItems);
  }

  function handleSelectedChange(e){
    switch(e.target.value){
      case "Reverse":
         handleReverseItems();
         break;
      default :
         return;
    }
  }
  function removeItem(itemId){
    const updatedItems = items.filter((item,index)=>item.id!=itemId);
    setItems(updatedItems);
  }
  function handleItems(){
    const newItems = [
      {id:nextIdx++,name:name},
      ...items
    ];
    setItems(newItems);
  }
 
  return (
    <>
    <h2>Items List</h2>
    <input type="text"
    value={name}
    onChange={(e)=>{setName(e.target.value)}}
    />{' '}
    <button onClick={handleItems}>Add</button>
    <select name='filter' onChange={(e)=>handleSelectedChange(e)}>
      <option value="">Filter</option>
      <option value="Reverse">Reverse</option>
      
    </select>
    <hr />
    <ul>
      {
        items.map((item)=>{
          return <li key={item.id}>
            {item.name}
            <button onClick={()=>removeItem(item.id)}>Remove</button>
          </li>
        })
      }
    </ul>
    </>
  )
}

export default App
