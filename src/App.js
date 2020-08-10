import React from 'react';
import logo from './logo.svg';
import './App.css';

//하위컴포넌트
// function WorldClock(props) {
//   return (
//     <div className={"WorldClock"}>
//       <h2>🌎: {props.city}</h2>
//       <p>🕐: {props.time}</p>
//     </div>
//   )
// }

class WorldClock extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hour: this.props.time,
      minute: 0
    }
    //state 바꾸기
    setInterval(() => {
      this.setState((state) => (
        state.minute === 59
        ? {hour: state.hour + 1, minute: 0}
        : {minute: state.minute + 1}      
      ))
    },100)

  }
//render라는 미리 약속된 함수
  render() {
    return (
      <div className={"WorldClock"}>
        <h2>🌎: {this.props.city}</h2>
        <p>🕐: {this.state.hour}시 {this.state.minute}분</p>
      </div>
    )

  }
}


//상위컴포넌트
function App() {
  const cityTimeData = [
    ['서울', 10],
    ['베이징', 9],
    ['시드니', 12],
    ['LA', 17],
    ['부산', 10]
  ]
  //props
  const worldClockList = cityTimeData.map((citytime, index)=>
    <WorldClock city={citytime[0]} time={citytime[1]} key={index}/>
  )
  return (
    <div className="App">
      <h1 className={'myStyle'}>Welcome!</h1>
      <div className={'post'}>
        🌎Time
      </div>
      {worldClockList}
    </div>
  );
}

export default App;
