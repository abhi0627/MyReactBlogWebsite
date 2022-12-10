import React  from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactCard from './ContactCard'
import { useState } from 'react'

export default function App() {
  const [contacts,setcontacts]=useState([]);
  function addconthandler(contact)
  {
    // console.log(contact);
    setcontacts([...contacts,contact]);
  }
  return (
    <div>
      <Header/>
      <AddContact addconthandler={addconthandler} />
      <ContactList contacts={contacts}/>
      </div>
    
  )
}
