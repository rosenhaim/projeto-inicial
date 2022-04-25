import React, {Component} from 'react'
import './App.css';
import Rosen from './Rosen';
import logo from './logo.svg'
import List from './List';





class App extends Component {


 constructor(props){
  super(props)
  this.state = {
    name: "State State State",
    email: "teste@teste.com"
  }
  //this.mudarEstado = this.mudarEstado.bind(this)
 }

 mudarEstado = () => {
   this.setState({
     name: "Estado mudado"
    
   })
 }
 mudarInput = (event) => {
   let target = event.target
   let index = target.name
  this.setState({
    [index] : target.value
  })  
  
 }
 resetar = () => {
   this.setState({
     name: "Zerou "
   })
 }

  render(){
  return (
    <div className="App">

  
 
 

<div>
  <form>
    <label> Nome
       <input 
       type="text"
       name="name"
       value={this.state.name}
       onChange={this.mudarInput}></input>
    </label>
    <label> Email
       <input 
       type="email"
       name="email"
       value={this.state.email}
       onChange={this.mudarInput}></input>
    </label>

  </form>
{this.state.name} - {this.state.email}
</div>
<button onClick={this.mudarEstado }>Mudar estado</button>
<button onClick={this.resetar }>Reset state</button>
<List>
  
</List>

    </div>
  );
}
}
export default App;
