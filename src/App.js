import React,{Component} from 'react';
import ReactFCCtest from 'react-fcctest';
import './App.css';
// import './play_pause.svg'
import playIcon from './play.svg'
import pauseIcon from './pause.svg'
import resetIcon from './reset.svg'

let sessionInterval
class App extends Component {
  constructor(props){
    super(props);
    this.audio = React.createRef();
  }
   

  state={
    breakLength:5,
    sessionLength:25,
    sessionTimeRemaining: 25*60,
    sessionActive:false,
    breakActive:false,
    currentDisplay:"Session",

  }

  convertTime=(input)=>{
    let seconds = input % 60
    let minutes = Math.floor(input / 60)
    
    seconds = seconds < 10 ? ("0"+seconds): seconds
    minutes = minutes < 10 ? ("0"+minutes): minutes

    return `${minutes}:${seconds}`
    
  }


playPause=()=>{
  


  if(this.state.sessionActive === false){
      

      sessionInterval = setInterval(()=>{
      

      if(this.state.sessionTimeRemaining===0){
        this.audio.current.play()
        console.log(this.audio)
        this.state.currentDisplay==="Session" ?
          this.setState({
            sessionTimeRemaining:this.state.breakLength*60 ,currentDisplay:"Break"})
            :this.setState({
            sessionTimeRemaining:this.state.sessionLength*60 ,currentDisplay:"Session"})
      }
      else{
        this.setState((prevState) => {return    {sessionTimeRemaining:prevState.sessionTimeRemaining -1}})
      }

     


    },1000)
    this.setState({sessionActive:true})

   
  }
  else{
    clearInterval(sessionInterval)    
    this.setState({sessionActive:false})
    

  }

  
  
}

reset =()=>{
  clearInterval(sessionInterval)
  
  this.setState({
    sessionTimeRemaining: 25*60,
    breakLength:5, 
    sessionLength:25,
    breakActive:false,
    sessionActive:false,
    currentDisplay:"Session"
    })
    this.audio.current.pause()
    this.audio.current.currentTime = 0
}

    

  handleClick=(event)=>{
   

 
    if(event.target.id ==="break-increment"){
      if(this.state.breakLength<60){
      this.setState((prevState)=> {return{breakLength: prevState.breakLength + 1}})
      }
    }

    else if(event.target.id ==="break-decrement"){
      if(this.state.breakLength>1){
        this.setState((prevState)=> {return{breakLength: prevState.breakLength - 1}})
      }
    }

    else if(event.target.id ==="session-increment"){
      if(this.state.sessionLength<60){
      this.setState((prevState)=> {return{sessionLength: prevState.sessionLength + 1}})
      }
    }

    else if(event.target.id ==="session-decrement"){
      if(this.state.sessionLength>1){
        this.setState((prevState)=> {return{sessionLength: prevState.sessionLength - 1}})
      }
    }
    

  }

componentDidUpdate(prevProps,prevState) {
  // Typical usage (don't forget to compare props):
  if (this.state.sessionLength !== prevState.sessionLength) {
    this.setState({sessionTimeRemaining:this.state.sessionLength*60})
  }


} //needs prevProps even not using, else infinite loop


render(){

    return (
      
    <div className="App">
      <div className="timer-body">
      <h2 id="timer-label">{this.state.currentDisplay}</h2>
        <div className="display">
          
            <div id="time-left">{this.convertTime(this.state.sessionTimeRemaining)}</div>
              <div className="buttons-con">
                  <div className="btn-ring">
                    <div className="button" id="start_stop" onClick={this.playPause}>
                    {this.state.sessionActive? <img className="icon pause-icon" src={pauseIcon}/> : <img className="icon" src={playIcon}/>}</div>
                  </div>

                  <div>
                    <div className="button" id="reset" onClick={this.reset}><img className="icon" src={resetIcon}/></div>
                  </div>

              </div>
            <audio
            ref={this.audio}
            id="beep"
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
            

        </div>


          <div className="break">
            <h3 id="break-label">Break length</h3>
            <h3 id="break-length">{this.state.breakLength}</h3>
            <button onClick={this.handleClick} id="break-increment">+</button>
            <button onClick={this.handleClick} id="break-decrement" disabled={this.state.breakLength===1 ? true: false}>-</button>
          </div>

          <div className="session">
          <h3 id="session-label">Session length</h3>
            <h3 id="session-length">{this.state.sessionLength}</h3>
            <button id="session-increment"  onClick={this.handleClick}>+</button>
            <button id="session-decrement" onClick={this.handleClick} disabled={this.state.sessionLength===1 ? true: false}>-</button>
          </div>
      </div>
      



    <ReactFCCtest />
    </div>
  );
}


}

export default App;
