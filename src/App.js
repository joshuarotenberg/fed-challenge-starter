import React, {useState} from 'react';
import './App.css';
import CardIndex from './components/CardIndex';



function App() {
  const [active, setActive] = useState({
    activeCard: null,
    objects: [{ id:1 }, { id:2 }, { id:3 }, { id:4 }, { id:5 }, { id:6 }, { id:7 }, { id:8 }]
  });


  const toggleActive = index => {
    setActive({...active, activeCard: active.objects[index]});
  }

  const toggleActiveStyle = index => {
    if(active.objects[index] === active.activeCard) {
      return "card active";
    } else {
      return "card inactive";
    }
  }

  return (
    <div className="app">
      <CardIndex active={active} toggleActive={toggleActive} toggleActiveStyle={toggleActiveStyle}/>
    </div>
  ); 
}

export default App;
 