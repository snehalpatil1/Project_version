import React from 'react'
import EditUser from './EditUser'
import EditVehicle from './EditVehicle'

import EditUsage from './EditUsage'
import EditBooking from './EditBooking'

function Dashboard()
{
    return(
        <div>
            
                  
                       <div>
                       <div className="div1">
                           {/* keep button in middle */}
                          <EditUser></EditUser>
                       
                       </div>
                    
                      
                        
                    
                        <div className="div2">
                        <EditBooking></EditBooking>
                        </div>
                       </div>
                    
                   
               
                  
                 
                       <div>
                       <div className="div3">
                      <EditVehicle></EditVehicle>
                       </div>
                    
                   
                        <div className="div4">
                       
                        <EditUsage></EditUsage>
                        </div>
                       </div> 
                    
                 
                    
          
        </div>
    )
}

export default Dashboard