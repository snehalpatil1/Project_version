
import React from 'react';
import axios  from 'axios';
import {withRouter} from 'react-router'

class  Register extends React.Component{
    constructor(props){  
        //Initialize state for component
        super(props);
        this.state={
                    //firstname:"",
                    //lastname:"",
                    userid:" ",
                    email:" ",
                    password:"",
                    contactNumber:"",
                    

        };
    }



    render(){
        return (
            <div>
                <h3>New Customer Registration</h3>

               
                
                <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" name="email"
                                onChange={ (event)=>{
                                    this.setState({email: event.target.value})
                                }} 
                               value={this.state.email}
                               className="form-control" id="email"/>
                </div>
                <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password"  name="password"
                               value={this.state.password}
                               onChange={ (event)=>{
                                this.setState({password: event.target.value})
                                }} 
                               className="form-control" id="password"/>
                </div>
                <div className="form-group">
                        <label htmlFor="contactnumber">Contact Number:</label>
                        <input type="text" name="contactnumber"
                               value={this.state.contactnumber}
                               onChange={ (event)=>{
                                this.setState({contactNumber: event.target.value})
                               }} 
                               className="form-control" id="contactnumber"/>
                </div>
                
                <div className="checkbox">
                        <label><input type="checkbox" />Remember me</label>
                </div>
                <button 
                        onClick={()=>{
                            console.log(this.state);
                            //Store registered data into localstorage
                            localStorage.setItem("customer",JSON.stringify(this.state));

                            axios.post("http://localhost:8080/register",{
                                email:this.state.email,
                                password:this.state.password,
                                contactNumber:this.state.contactNumber
                            }).then((response)=>{
                                console.log(response)
                            })
                             this.props.history.push('/Login');
                        }}
                        className="btn btn-success">Submit</button>
            </div>
        );
    }
}
export default withRouter(Register)