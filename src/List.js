import React, { Component } from 'react';
import BlaBla from './BlaBla';
import photo from './photo.jpeg';



class List extends Component {
   render(){

    let list = [
        {
            name : "Nataniel", 
            email: "nataniel.paiva@gmail.com"
        },
        {
            name : "Josão", 
            email: "josao@gmail.com"
        }
    ]


    return (
        <div>
           
             <table border="1">
                 <tr>
                     <th>Name</th>
                     <th>Email</th>
                 </tr>
                 { list.map((item) => {
                     return <tr>
                         <td>
                         {item.name}
                         </td>
                         <td>
                             {item.email}
                         </td>
                     </tr>

                 }
                 )
                 }
                 </table>

             
        </div>
       
        );   
  

   }
     
      

}


export default List;