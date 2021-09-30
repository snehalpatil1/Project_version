
import React, { Component } from 'react';
import VehicleService  from './VehicleService';
import { Link } from "react-router-dom";
import  {  useEffect } from "react";

class ListVehicleComponent extends Component{

    constructor(props) {
        console.log("Vehicle constructor");
       
        super(props)

        this.state = {
            vehicle: []
        }
        

        // useEffect(() => {
        //     loadUsers();
        //   }, []);
        

        // this.addEmployee = this.addEmployee.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        // this.deleteEmployee = this.deleteEmployee.bind(this);
    }
//change delete with glyficon or google icon
    deleteUser(email){
        VehicleService.Service.deleteUser(email).then( res => {
        this.setState({user: this.state.user.filter(user=> user.email !== email)});
        });
    }
    // viewUser(email){
    //     console.log("User emailid=" +email);
    //     //no need of link in hstory.push
    //     this.props.history.push('/ViewUserComponent');

    // }
    //  loadUsers = async () => {
    //     const result = await axios.get("http://localhost:9898/api/users");
    //     setUser(result.data.reverse());
    //   };


    // editEmployee(id){
    //     console.log("user id=" +id);
    //     this.props.history.push(`add-user/${id}`)
    // }

    componentDidMount(){
        VehicleService.getVehicles().then((res) => {
            this.setState({ vehicle : res.data});
            console.log(res.data)
        });
    }

    addUser(){
        console.log("Add new user" );
    }
   render() {
        return (
            <div>
                 <h2 className="text-center">Vehicle List</h2>
                 <div className = "row">
                    <Link class="btn btn-outline-primary mr-2" to={`/user/adduser`} >Add Vehicle </Link>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Vehicle Id</th>
                                    <th> Vehicle type</th>
                                    <th> Vehicle chessisNumber</th>
                                    <th> Vehicle Image</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.vehicle.map(
                                        vehicle => 
                                        
                                        <tr key = {vehicle.vehicleId}>
                                            <td>{vehicle.vehicleId}</td>
                                              <td> {vehicle.type} </td>   
                                            <td> {vehicle.chessisNumber}</td>
                                             <td> {vehicle.vImage}</td> 
                                             <td>
                                                 {/* <button onClick={ () => this.editUser(user.email)} className="btn btn-info">Update </button> */}
                                                 <Link class="btn btn-outline-primary mr-2" to={`/vehicle/edit/${vehicle.id}`} >  Edit </Link>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(vehicle.id)} className="btn btn-danger">Delete </button>
                                                 {/* <Link class="btn btn-primary mr-2" to={`/user/${user.email}`}>View </Link> */}
                                                 <Link className="btn btn-primary" to={`/user/${vehicle.id}`}>View</Link>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
                 
            </div>
        )
    }

    
}

export default ListVehicleComponent;