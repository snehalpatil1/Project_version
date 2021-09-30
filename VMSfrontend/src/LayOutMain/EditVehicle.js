
import React from 'react';
// import {useHistory} from 'react-router-dom'
import {withRouter} from 'react-router'
import UserService from './UserService'

class  EditVehicle extends React.Component{

    constructor(props){  
        //define state for component
        super(props);
        this.state={
                    email:"",
                    password:""

        //             id: this.props.match.params.id,
        //     user: {}
         };
       
    }
  
    // componentDidMount(){
    //     UserService.getUserById(this.state.id).then( res => {
    //         this.setState({user: res.data});
    //     })
    // // }
    //  componentDidMount()
    // {
    //     (event)=>{
    //         this.setState({email: event.target.value})
    //      }
    // }

    // componentDidMount()
    // {
    //     (event)=>{
    //         this.setState({password: event.target.value})
    //      }
    // }

    render(){
        return (
            <div>         
                   

                    
            
                    <button 
                            className="btn btn-success"
                            onClick={()=>{
                                
                                   
                                 
                                // var {email,password}=JSON.parse(localStorage.getItem("customer"))
                               
                                //every page shuld be validated 
                                          
                                //             if(this.state.email ===email
                                //                 &&
                                //                 this.state.password===password)
                                //             {
                                //                 console.log("Valid User");
                                                //this.props.history.push('/Dashboard')
                                                this.props.history.push('/vehicles');
                                            
                                            // }
                                            // else{
                                            //     console.log("Invalid User");
                                            // }
                                           
                                        }
                                        
                                    }
                            >Edit Vehicle</button>

                    <br/>

                    
            </div>
        );
    }
}
export default withRouter( EditVehicle)