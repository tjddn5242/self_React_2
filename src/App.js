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

class WorldClock extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      day: 0,
      hour: this.props.time,
      minute: 0,
      stop: false,
    }
    console.log(" Child) start!")
  }
    //state 바꾸기


  componentDidMount() {
  
  this.timer = setInterval(() => {
    this.setState((state) => (        
      state.minute === 59
      ? state.hour === 23 
        ? {day: state.day + 1, hour: 0}
        : {hour: state.hour + 1, minute: 0}
      : {minute: state.minute + 1}
      
    ))
  },1000)

  console.log(" Child) Mount")
}

  componentDidUpdate() {
    console.log("Child) Update")
  }

  componentWillUnmount() {
    console.log(" Child) 언마운트")
    clearInterval(this.timer)
  }


handlingClick = (event) => {
  this.setState({stop: event.target.value})
  clearInterval(this.timer)
}

//render라는 미리 약속된 함수
  render() {
    return (
      <div className={"WorldClock"}>
        <h2>🌎: {this.props.city}</h2>
        <p>🕐: {this.state.day}일 {this.state.hour}시 {this.state.minute}분</p>
        <button value={true} onClick={this.handlingClick}>Stop!</button>
      </div>
    )

  }
}


//상위컴포넌트
class App extends React.Component {

  constructor(props) {
    super(props)
    this.cityTimeData = [
      ['서울', 10],
      ['베이징', 9],
      ['시드니', 12],
      ['LA', 17],
      ['부산', 10]
    ]
    this.state = {
      content: '',
      show: true,
    }
    console.log("Parent) 시작합니다.")
  }

  componentDidMount() {
    console.log("Parent) Mount")
  }

  handlingChange = (event) => {
    this.setState({content: event.target.value})
  }

  handlingClick = (event) => {
    this.setState((prevState) => ({show: !prevState.show}))
  }

  //props
  render() {
  
  return (
    <div className="App">
      <h1 className={'myStyle'}>Welcome!</h1>
      <div className={'post'}>
        🌎Time
        <textarea value={this.state.content} onChange={this.handlingChange}></textarea>
      </div>
      <button onClick={this.handlingClick}>손가락 튕기기</button>
      { this.state.show &&
        this.cityTimeData.map((citytime, index)=>
      <WorldClock city={citytime[0]} time={citytime[1]} key={index}/>
  )}
    </div>
  );
  }
}

export default App;
