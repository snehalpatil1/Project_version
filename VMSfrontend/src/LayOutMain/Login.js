
import React from 'react';
import axios from 'axios';
// import {useHistory} from 'react-router-dom'
import { withRouter } from 'react-router'
class Login extends React.Component {

    constructor(props) {
        //define state for component
        super(props);
        this.state = {
            email: "",
            password: ""
        };

    }


    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" value={this.state.email}
                        onChange={(event) => {
                            this.setState({ email: event.target.value })
                        }
                        }
                        className="form-control"
                        id="email" />
                </div>

                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" name="password" value={this.state.password}
                        onChange={(event) => {
                            this.setState({ password: event.target.value })
                        }
                        }
                        className="form-control" id="pwd" />
                </div>

                <div className="checkbox">
                    <label><input type="checkbox" /> Remember me</label>
                </div>

                <button
                    className="btn btn-success"
                    onClick={() => {
                        // if(validated email n password with lenngth then only to login)
                        axios.post("http://localhost:8080/spring_backend/user/login", {
                            password: this.state.password,
                            email: this.state.email
                        }).then((response) => {
                            console.log(response.data)
                            var fields = response.data.split(' ');
                            console.log("check success :" + fields[0])
                            console.log("check type Id :" + fields[1])
                            if (fields[0] == "success" && fields[1] == "ADMIN")
                                this.props.history.push('/Dashboard');
                            else if (fields[0] == "success" && fields[1] == "CUSTOMER")
                                this.props.history.push('/vehiclesForCustomers');
                            else if (fields[0] == "success" && fields[1] == "DRIVER")
                                this.props.history.push('/VehicleForDrivers');
                            // else if(fields[0]=="success" && fields[1]=="OWNER" )
                            // this.props.history.push('/Dashboard');
                            else
                                this.props.history.push('/Login');
                        })


                        //     else{
                        //         console.log("Invalid User");
                        //     }
                    }
                        // onClick={()=>{
                        //     var {email,password}=JSON.parse(localStorage.getItem("customer"))
                        //     console.log(this.state.email)

                        //                 if(this.state.email === email
                        //                     &&
                        //                     this.state.password===password)
                        //                 {
                        //                     console.log("Valid User");
                        //                     this.props.history.push('/Dashboard')
                        //                     //this.props.history.push('/Users');

                        //                 }
                        //                 else{
                        //                     console.log("Invalid User");
                        //                 }
                        //             }
                    }
                >Login</button>

                <br />

                <button
                    className="btn btn-success"
                    onClick={() => {

                        this.props.history.push('/Register');
                    }
                    }
                >New User</button>
            </div>
        );
    }
}
export default withRouter(Login)