import React from 'react'
import ContactCard from './ContactCard';

export default function ContactList(props) {
    console.log(props);
    const rendcontsctlist=props.contacts.map((ele, ind)=>{
        return(
           <ContactCard key={ind} name={ele.name} email={ele.email}/>
        );
    });
  return (
    <div>
        {rendcontsctlist}
    </div>
  )
}
