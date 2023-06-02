import { useState } from 'react';

import Contacts from '../components/Contacts';
import Form from '../components/Form';

export default function Ejercicio3() {

  const initialContactState = [
    {nombre: "Juan", apellidos: "Gonzalez Blanco", direccion: "Los guindos", ciudad: "Malaga", cp: 29003, telefono: 652346936},
    {nombre: "Emilio", apellidos: "Escobar Gaviria", direccion: "Manuel Altolaguirre", ciudad: "Malaga", cp: 29006, telefono: 472956186},
    {nombre: "María", apellidos: "Perez Galdos", direccion: "Santa Paula", ciudad: "Malaga", cp: 29005, telefono: 952369716},
  ]

  const [contacts, setContacts] = useState(initialContactState);

  return (
    <div className="container">
      <h2 className='my-4'>Agenda</h2>
      <Contacts contactos={contacts} setContacts={setContacts}></Contacts>
      
      <h2 className='my-4'>Nuevo Contacto</h2>
      <Form setContacts={setContacts}></Form>
    </div>
  );
}