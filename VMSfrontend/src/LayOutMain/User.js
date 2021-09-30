import React, { Component } from 'react'
import UserService from './UserService'
import {withRouter} from 'react-router'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //id:1,
            email: this.props.match.params.email,
            user: {}
        }
    }

    componentDidMount(){
         console.log(this.state.email)
        UserService.getUserById(this.state.email).then( res => {
            console.log(res.data)
            this.setState({user: res.data});
            //console.log(this.state.user)
        })
    }

    render() {
        return (
            <div>//view all details
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User Id </label>
                            <div> { this.state.user.userId }</div>
                        </div>
                        </div>   
                    <div className = "card-body">
                        <div className = "row">
                            <label> User Email: </label>
                            <div> { this.state.user.email }</div>
                        </div>
                        <div className = "row">
                            <label> User password: </label>
                            <div> { this.state.user.password}</div>
                        </div>
                        <div className = "row">
                            <label> User contact Number: </label>
                            <div> { this.state.user.contactNumber}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(ViewUserComponent)