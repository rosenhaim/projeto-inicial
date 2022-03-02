import React, { Component } from 'react';
import './App.css';



class BlaBla extends Component {
   render(){
    return (
        <div>
           <div>
                  Nome: {this.props.name}
           </div>
              
         <div>
                  Foto: <img src={this.props.photo} className='App-logo2' alt='logo' />

         </div>      


              </div>
              
           
          

             
     
       
        );   
  

   }
     
      

}


export default BlaBla