import React from 'react'
import profile from "./profile2.png"
export default function ContactCard(props) {
  return (
    <div>
        <div className="item">
            
          <img className='myprofile' src={profile} alt="user" style={{height:"35px"}} />
            <div className="content">
                <div className="header">
                    <div><h3>{props.name}</h3> </div>
                    <div>{props.email}</div>
                </div>
            </div>
        </div>
    </div>
  )
}
