import React, { useState } from "react";
import "./App.css";

function App() {

  const [mood, setMood] = useState(null);

  const moods = {
    Happy: {
      emoji: "😊",
      message: "Glad you're feeling happy!",
      color: "#ffc0cb"
    },
    Neutral: {
      emoji: "😐",
      message: "Just a normal day.",
      color: "#d3d3d3"
    },
    Sad: {
      emoji: "😢",
      message: "It's okay to feel sad sometimes.",
      color: "#fff176"
    },
    Angry: {
      emoji: "😡",
      message: "Take a deep breath.",
      color: "#ff6b6b"
    }
  };

  return (
    <div
      className="main-container"
      style={{ backgroundColor: mood ? moods[mood].color : "#f4f4f4" }}
    >
      <div className="card">

        <h1>Mood Tracker</h1>

        {mood && (
          <>
            <div className="emoji">{moods[mood].emoji}</div>
            <p className="message">{moods[mood].message}</p>
          </>
        )}

        <div className="buttons">
          {Object.keys(moods).map((m) => (
            <button
              key={m}
              className={mood === m ? "active" : ""}
              onClick={() => setMood(m)}
            >
              {moods[m].emoji} {m}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;