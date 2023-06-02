import Contacts from '../components/Contacts';
import Form from '../components/Form';

export default function Ejercicio3() {

  return (
    <div className="container">
      <h2 className='my-4'>Agenda</h2>
      <Contacts ></Contacts>
      
      <h2 className='my-4'>Nuevo Contacto</h2>
      <Form></Form>
    </div>
  );
}