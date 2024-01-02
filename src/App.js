import {Component,createRef} from 'react'
 class App extends Component{
  constructor()
  {
    super()
    this.state={"data":""}
    this.t1=createRef()
  }
  render(){
    return(
      <div>
        <input type='text' ref={this.t1}/>
        <button onClick={()=>this.setState({"data":this.t1.current.value})}>Click</button>
        <div>{this.state.data}</div>
      </div>
    )
  }
 }
 export default App