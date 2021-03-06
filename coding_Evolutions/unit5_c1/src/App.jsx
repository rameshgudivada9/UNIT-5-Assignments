import { useState } from "react";

import "./App.css";

function App() {
  const [score, setScore] = useState(76);

  const [wicket, setWicket] = useState(2)
  
  const [over, setOver] = useState(50);

  if(score>100){
    var ans="INDIA WIN"
  }
  if(wicket==10){
    var ans="INDIA LOSS"
  }


  const handleChange = (val) => {
    if (val === 0) {
      setScore(0);
    } 
    else if (val === 4) {
      setScore(score + 4);
    } 
    else if (val === 6) {
      setScore(score + 6);
    } 
    else {
      if (score + val < 0) return;
      setScore(score + val);
    }
  };

  const wickets=(wic)=>{
    if (wic === 0) {
      setWicket(0);
    } 
    else {
      if (wicket + wic < 0) return;
      setWicket(wicket + wic);
    }
  }


  const overs=(ov)=>{
    if (ov === 0) {
      setOver(0);
    } 
    else {
      if (over + ov < 0) return;
      setOver(over + ov);
    }
  }

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              score
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              wicket
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              over
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        { score/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{
                 handleChange(1);
        }}>Add 1</button>
        <button className="addScore4" onClick={()=>{
                    handleChange(4);

        }}>Add 4</button>
        <button className="addScore6" onClick={()=>{
                    handleChange(6);

        }}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        { wicket/* Increase the count of wicket */}
        <button onClick={()=>{
          wickets(1)
        }}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        { over/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{
          overs(1.0)
        }}>Add 1</button>
      </div>

      {ans/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
