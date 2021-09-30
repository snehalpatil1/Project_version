import React, { Component } from 'react'
import VehicleService from './VehicleService'
import {withRouter} from 'react-router'

class ViewVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //id:1,
            vehicleId: this.props.match.params.vehicleId,
            vehicle: {}
        }
    }

    componentDidMount(){
         console.log(this.state.id)
        VehicleService.getVehicleById(this.state.vehicleId).then( res => {
            console.log(res.data)
            this.setState({vehicle: res.data});
        })
    }

    render() {
        return (
            <div>//view all details
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Vehicle Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Vehicle Id: </label>
                            <div> { this.state.vehicle.id }</div>
                        </div>
                        <div className = "row">
                            <label> Vehicle chesisNumber: </label>
                            <div> { this.state.vehicle.chesisNumber}</div>
                        </div>
                        <div className = "row">
                            <label> Vehicle  type: </label>
                            <div> { this.state.vehicle.type}</div>
                        </div> 
                    </div>
                    <div className = "row">
                            <label> Vehicle  active: </label>
                            <div> { this.state.vehicle.active}</div>
                        </div> 
                    

                </div>
            </div>
        )
    }
}

export default withRouter(ViewVehicleComponent)