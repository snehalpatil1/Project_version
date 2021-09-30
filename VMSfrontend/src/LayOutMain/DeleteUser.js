
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const DeleteUser = () => {

  let history = useHistory();
  const { userId } = useParams();

//   const [user, setUser] = useState({
   
//     // password :"",
//     // contactNumber:""
//   });

//   const { password,contactNumber } = user;


//   const onInputChange = e => {
      
//     setUser({ ...user, password: e.target.value});
//     console.log("on change : "+user.password)
//   };

//   useEffect(() => {
//     loadUser();
//   }, []);

  const onSubmit = async e => {
    e.preventDefault();
   console.log("on submit"+userId)
    await axios.delete(`http://localhost:8080/spring_backend/user/${userId}`);
    history.push("/User");
  };

//   const loadUser = async () => {
//     console.log(userId)
//     const result = await axios.get(`http://localhost:8080/spring_backend/user/${userId}`);
//     setUser({user:result.data[0]});
//     console.log(result.data[0])
//   };
return(
    <h1>User with given id deleted successfully</h1>
)
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Edit A User</h2>
//         <form onSubmit={e => onSubmit(e)}>

//         <div className="form-group">
//             <input


//               type="number"
//               className="form-control form-control-lg"
//               placeholder="User Id"
//               name="userId"
//               value={userId}
//               onChange={e => onInputChange(e)}
//             />
//           </div>

//           {/* <div className="form-group">
//             <input


//               type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={email}
//               onChange={e => onInputChange(e)}
//             />
//           </div> */}
//           <div className="form-group">
//             <input

//           type="text"  name="password"
              
//               className="form-control form-control-lg"
//               placeholder="Enter Your Password"
            
//               defaultValue={password}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your contact number"
//               name="contactnumber"
//               value={contactNumber}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
        
       
//           <button className="btn btn-warning btn-block">Update User</button>
//         </form>
//       </div>
//     </div>
//   );
};

export default DeleteUser;




//make this component using function

//it will work
// import React, { Component } from 'react'
// import UserService from './UserService'
// import { withRouter } from 'react-router'
// import axios from 'axios'

// class UpdateUser extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             //id:1,
//             email: this.props.match.params.email,
//             user: {},
//             password:"",
//             contactnumber:""
            
            
//         }
        
        
//     }
    


//     componentDidMount() {
//         console.log(this.state.email)
//         UserService.getUserById(this.state.email).then(res => {
//             console.log(res.data)
//             this.setState({ user: res.data[0] });
//             this.password=res.data[0].password
//             this.contactnumber=res.data[0].contactnumber
//             console.log(this.password)
//             console.log(this.contactnumber)
//         })
//     }


//     // onInputChange = e => {
//     //     this.setState({ [e.target.password]: e.target.value });
//     // };


//     // onSubmit = async e => {
//     //     e.preventDefault();
//     //     await axios.put(`http://localhost:9999/api/users/${this.state.email}`, this.user);
//     //     // history.push("/Users");
//     //     console.log("kuch toh ua")
//     // };

//     render() {
//         return (
//             <div className="container">
//                 <div className="w-75 mx-auto shadow p-5">
//                     <h2 className="text-center mb-4">Edit A User</h2>
//                     <form onSubmit={ async e =>  await axios.put(`http://localhost:9999/api/users/${this.state.email}`, this.user)}>
//                         <form>
//                             <div className="form-group">
//                                 <input
//                                     type="email"
//                                     className="form-control form-control-lg"
//                                     placeholder="Enter Your Email"
//                                     name="email"
//                                     value={this.state.user.email}
//                                 //   onChange={e => onInputChange(e)}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                     type="password"
//                                     className="form-control form-control-lg"
//                                     placeholder="Enter Your password"
//                                     name="password"
//                                     value={this.state.user.password}
//                                     // onChange={e => onInputChange(e)}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <input
//                                     type="number"
//                                     className="form-control form-control-lg"
//                                     placeholder="Enter Your Contact Numbers"
//                                     name="contactnumber"
//                                     value={this.contactnumber}
//                                     onChange={e => this.setState({ [e.target.password]: e.target.value })}
//                                 />
//                             </div>

//                             <button className="btn btn-warning btn-block">Update User</button>
//                         </form>
//                         </form>
//       </div>
//                 </div>
//         )}
// }
//                 export default withRouter(UpdateUser)