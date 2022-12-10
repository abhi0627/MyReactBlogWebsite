import React, { useState } from 'react'

export default function AddContact(props) {
  console.log(props);
  const [credentials, setCredentials] = useState({
    email: "", name: ""
  });



  return (
    <div>
        <div className='addcont'>
            <h2>add contact</h2>
            <h2>add contact</h2>
            <h3>name</h3>
            <input type="text" name="name" placeholder='abhi' onChange={(e)=> {setCredentials({ ...credentials, [e.target.name]: e.target.value })}} required/>
            <h3>email</h3>
            {/* <input type="email" name="email" id="" placeholder='abhi01@gmail.com' onChange={addemail} required/><br /> */}
            <input type="email" name="email" id="" placeholder='abhi01@gmail.com' onChange={(e)=> {setCredentials({ ...credentials, [e.target.name]: e.target.value })}} required/><br />
            <button className='ui button blue'></button>
            <br />
           
        </div>
    </div>
  )
}
