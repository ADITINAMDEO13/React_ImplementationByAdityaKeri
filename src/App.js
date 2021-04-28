import './App.css';
import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState([
    { name: "Iron Man", active: false, id: 1 },
    { name: "Spider Man", active: false, id: 2 },
    { name: "Deadpool", active: false, id: 3 },
    { name: "Thor", active: false, id: 4 }]
  );
  
  const [clas, setClas] = useState("cardactive")
  

  const changeBorder = (id) => {
    const updatedData = display.map((item) => {
      if (item.id === id) {
        return {...item, active:!item.active}
      }
      else {
        return {...item, active:false}
      }
      return item;
    })
    setDisplay(updatedData);
  }


  return (
    < div className="displaydata">
      {display.map((items) => 
        <div className={items.active ? 'card' : 'cardactive'} onClick={()=>{changeBorder(items.id)}} > <h1>{items.name}</h1>
        </div>
      )}
    </div>
    );
}
export default App;