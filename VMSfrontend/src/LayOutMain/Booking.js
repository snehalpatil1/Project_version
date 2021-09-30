
import React, { Component } from 'react';
import BookingService  from './VehicleBookingService';
import { Link } from "react-router-dom";
import EditBooking from './EditBooking';

class ListBookingComponent extends Component{

    constructor(props) {
        console.log("User constructor");
        super(props)

        this.state = {
            booking: []
        }

        // useEffect(() => {
        //     loadUsers();
        //   }, []);
        

        // this.addEmployee = this.addEmployee.bind(this);
        // this.editEmployee = this.editEmployee.bind(this);
        // this.deleteEmployee = this.deleteEmployee.bind(this);
    }
//change delete with glyficon or google icon
    // deleteUser(userId){
    //     UserService.deleteUserById(userId).then( res => {
    //     this.setState({user: this.state.user.filter(user=> user.userId !== userId)});
    //     });
    // }
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
        BookingService.getVehicleBooking().then((res) => {
            this.setState({ booking: res.data});
            console.log(res.data)
        });
    }

    
   render() {
        return (
            <div>
                 <h2 className="text-center">All Booking List</h2>
                 {/* <div className = "row">
                    <Link class="btn btn-outline-primary mr-2" to={`/user/adduser`} >Add User </Link>
                 </div> */}
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Booking   Id</th>
                                    <th> from place of Boking</th>
                                    <th> to place of booking</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.booking.map(
                                        booking => 
                                        <tr key = {booking.bookingId}>
                                             <td> {booking.bookingId} </td> 
                                             <td> {booking.fromPlace} </td>   
                                             <td> {booking.toPlace}</td>
                                             <td>
                                                 {/* <button onClick={ () => this.editUser(user.email)} className="btn btn-info">Update </button> */}
                                                 <Link class="btn btn-outline-primary mr-2" to={`/booking/edit/${booking.bookingId}`} >  Edit </Link>
                                                 {/* <Link class="btn btn-outline-primary mr-2" to={`/user/delete/${user.userId}`} >  delete </Link> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(booking.bookingId)} className="btn btn-danger">Delete </button>
                                                 {/* <Link class="btn btn-primary mr-2" to={`/user/${user.email}`}>View </Link> */}
                                                 <Link className="btn btn-primary" to={`/booking/${booking.bookingId}`}>View</Link>
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

export default ListBookingComponent;