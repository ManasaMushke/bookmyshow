import React from "react";
class Reg extends React.Component
{
    constructor()     // every class component contains constructor
    {
        super();  // paired class  constructor(component (method)) inside the child class constructor(constructor)*super * is a parent class constructor  callrd inside the child class constructed because to make child complete as equal to component
        this.state = {firstName:'Manasa',lastName:'Mushke'};
    }    
    firstNameOnchangeHandler=(eventdata)=>
    {
       console.log('firstNameOnchangeHandler')
    }
lastNameOnchangeHandler=(eventdata)=>{
  console.log('lastNameOnchangeHandler')
}
   render()
   {
    return(
        <div>
            <table>
                <tbody>
                <tr>
                    <td>First Name</td>
                    <td><input type = "text"
                    id = "firstName"
                    name= "firstName"
                    value={this.state.firstName}
                    onChange={this.firstNameOnchangeHander}>
                    </input>                   
                    </td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td><input type="text"
                         id = "lastName" 
                          name = "lastName"
                          value={this.state.lastName}
                          onChange={this.lastNameOnchangeHandler}>                   
                    </input>
                     </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
   }
}
export default Reg;