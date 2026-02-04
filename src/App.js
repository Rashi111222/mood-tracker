import React from "react";
import "./App.css";
import {useState} from "react";


const moodOptions=[
  { emoji: "😄", label: "Happy" },
  { emoji: "🙂", label: "Calm" },
  { emoji: "😐", label: "Okay" },
  { emoji: "😔", label: "Sad" },
  { emoji: "😡", label: "Angry" },
  { emoji: "😴", label: "Tired" }
];
function App(){
  const [mood,setMood]=useState(null); /*mood=>data, setMood=>Change data*/
  const [moods,setMoods]=useState([]);
  const [note,setNote]=useState("");

  const addMood=()=>{
    if(!mood) 
      return;

    const newMood={
      emoji: mood.emoji,
      label: mood.label,
      note : note
  };

    setMoods([...moods,newMood]);
    setMood(null);
    setNote("");
  };
    const deleteMood=(indexToDelete)=>{
      const updateMoods= moods.filter((_,index)=> index!==indexToDelete);
      setMoods(updateMoods);
    };

  return(
    <div className="app">
      <h1>🌷 Mood Tracker</h1>
      <div className="emoji-row">
        {moodOptions.map((m,index)=>(
          <button
          key={index}
          className={`emoji-btn ${mood?.emoji===m.emoji ? "active": ""}`}
          onClick={()=>setMood(m)}
          >
            {m.emoji}
          </button>
        ))}
      </div>
    
        <input
        type="text"
        value={note}
        className="note"
        placeholder="write a note (optional)"
        onChange={(e)=>setNote(e.target.value)}></input>

      <button onClick={addMood}>add</button>

      <div className="gallery">
        {moods.map((m,index)=>(
          <div className="card" key={index} >
            <span className="emoji"> {m.emoji}</span>
            <span className="text">{m.label}</span>
           
            {m.note && <p className="note">{m.note}</p>}

           <button className="delete-btn" 
                    onClick={()=>deleteMood(index)}>✕</button>
      </div>
        ))}
    </div>
    </div>
  );
}

export default App;