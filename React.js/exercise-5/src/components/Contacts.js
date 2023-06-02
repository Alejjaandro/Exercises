import React from 'react'

export default function Contacts({contactos, setContacts}) {

  const removeContact = telefono => {
    setContacts(contactos.filter(contact => contact.telefono !== telefono))
  }

  return (
    <div className='row'>
      {contactos.map((contact, index) => {
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
