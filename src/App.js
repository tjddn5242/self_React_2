import React from 'react';
import logo from './logo.svg';
import './App.css';

function WorldClock(props) {
  return (
    <div className={"WorldClock"}>
      <h2>🌎: {props.city}</h2>
      <p>🕐: {props.time}</p>
    </div>
  )
}


//JSX사용
function App() {
  const cityTimeData = [
    ['서울', 10],
    ['베이징', 9],
    ['시드니', 12],
    ['LA', 17],
    ['부산', 10]
  ]

  const worldClockList = cityTimeData.map((citytime, index)=>
    <WorldClock city={citytime[0]} time={citytime[1]} key={index}/>
  )
  return (
    <div className="App">
      <h1 className={'myStyle'}>Welcome Judy!</h1>
      <div className={'post'}>
        🌎Time
      </div>
      {worldClockList}
    </div>
  );
}

export default App;
