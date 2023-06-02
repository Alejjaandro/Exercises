import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../App';

export default function Contacts() {

  const {contacts, setContacts} = useContext(GlobalContext);

  const removeContact = telefono => {
    setContacts(contacts.filter(contact => contact.telefono !== telefono))
  }

  return (
    <div className='row'>
      {contacts.map((contact, index) => {
        return (
        <ul className='list-group mb-3 col-4' key={contact.telefono}>
          <li className="list-group-item active">Contacto {index + 1}</li>
          <li className='list-group-item'>{contact.nombre}</li>
          <li className='list-group-item'>{contact.apellidos}</li>
          <li className='list-group-item'>{contact.direccion}, {contact.cp}, {contact.ciudad}</li>
          <li className='list-group-item'>{contact.telefono}</li>
          <li className='list-group-item'>
            <button className='btn btn-warning' onClick={() => removeContact(contact.telefono)}>Eliminar</button>
          </li>
        </ul> 
      );
      })}
    </div>
  )
}
