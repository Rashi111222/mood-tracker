import React from "react";
import "./App.css";
import {useState} from "react";

function App(){
  const [mood,setMood]=useState(""); /*mood=>data, setMood=>Change data*/
  const [moods,setMoods]=useState([]);

  const addMood=()=>{
    if(mood==="") 
      return;
    setMoods([...moods,mood]);
    setMood("");
  };
    const deleteMood=(indexToDelete)=>{
      const updateMoods= moods.filter((_,index)=> index!==indexToDelete);
      setMoods(updateMoods);
    };

  return(
    <div className="app">
      <h1>🌷 Mood Tracker</h1>
      {/* onChange updates the mood state variable */}
      <input
      type="text"
      placeholder="how do you feel today?"
      value={mood}
      onChange={(e)=>setMood(e.target.value)} 
      />

      <button onClick={addMood}>add</button>

      <div className="gallery">
        {moods.map((m,index)=>(
          <div className="card" key={index} >
            <span className="text"> {m}</span>
           
           <button className="delete-btn" 
                    onClick={()=>deleteMood(index)}>✕</button>
      </div>
        ))}
    </div>
    </div>
  );
}

export default App;