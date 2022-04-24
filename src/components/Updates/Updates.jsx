import React from 'react'
import { UpdatesData } from '../../Data/Data'
import './Updates.css';
const Updates = () => {
  return (
    <div className="Updates">
        {UpdatesData.map((update)=>{
            return(
                <div className="Update">
                    {/* <div className="Update-img"> */}
                        <img src={update.img} alt="avatar"/>
                    {/* </div> */}
                    <div className="noti">
                        <div style={{marginBottom: '0.5rem'}}>
                        <h3>{update.name}</h3>
                        <p>{update.noti}</p>
                        </div>
                        <span>{update.time}</span>
                    </div>
                    
                </div>
          
            )
        })}
    </div>
  )
}

export default Updates