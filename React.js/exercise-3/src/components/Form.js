import React, { useState } from 'react'

export default function Form({setContacts}) { // Para acceder al prop con la funcion "setContacs".

  // const [nombre, setNombre] = useState("");
  // const [apellidos, setApellidos] = useState("");
  // const [direccion, setDireccion] = useState("");
  // const [cp, setCp] = useState("");
  // const [ciudad, setCiudad] = useState("");
  // const [telefono, setTelefono] = useState("");

  // function handleNombre (e) {
  //   setNombre(e.target.value);
  // };
  // function handleApellidos (e) {
  //   setApellidos(e.target.value);
  // };
  // function handleDireccion (e) {
  //   setDireccion(e.target.value);
  // };
  // function handleCP (e) {
  //   setCp(e.target.value);
  // };
  // function handleCiudad (e) {
  //   setCiudad(e.target.value);
  // };
  // function handleTelefono (e) {
  //   setTelefono(e.target.value);
  // };
 
  //JUNTANDO LO ANTERIOR EN UNA SOLA VARIABLE Y UNA FUNCION:
   
  const initialState = { // VARIABLE
    nombre: "",
    apellidos: "",
    direccion: "",
    cp: "",
    ciudad: "",
    telefono: "",
  }
  const [form, setForm] = useState(initialState)

  function handleInput (e) { // FUNCION
    const inputName = e.target.id;
    const newValue = e.target.value;

    setForm({...form, ...{[inputName]: newValue}});
  }

  function submit (e) {
    e.preventDefault();

    // const newContact = {nombre, apellidos, direccion, cp, ciudad, telefono}; 
    // // Estas propiedades solo existen ahora dentro de "form".
    const newContact = {
      nombre: form.nombre,
      apellidos: form.apellidos,
      direccion: form.direccion,
      cp: form.cp,
      ciudad: form.ciudad,
      telefono: form.telefono,
    };

    // setContacts([...contacts, newContact]); Necesitaría recibir el array "contacts" por props.
    setContacts(currentContacts => [...currentContacts, newContact]);
    /* 
    Si en vez de un estado "setContacts(estado)" como en el ej. anterior, le paso una función, 
    "setContacts" me envia por argumento los contactos que estén en ese momento (currentContacts)
    y devuelve el nuevo valor ([...currentContacts, newContact]). 
    NO necesitaría recibir el array "contacts" por props.
    */

    // e.target.reset(); //Esto vacía el contenido de los campos pero el valor guardado en "setName" se mantiene.
    
    setForm(initialState);
    // setNombre("");
    // setApellidos("");
    // setDireccion("");
    // setCp("");
    // setCiudad("");
    // setTelefono("");
  }

  return (
    <form className='form-group w-50' onSubmit={submit}>
      <input id='nombre'    value={form.nombre}     onChange={handleInput} placeholder="Introduce un nombre"             className="form-control mb-3" type="text"/>
      <input id='apellidos' value={form.apellidos}  onChange={handleInput} placeholder="Introduce los apellidos"         className="form-control mb-3" type="text"/>
      <input id='direccion' value={form.direccion}  onChange={handleInput} placeholder="Introduce la direccion"          className="form-control mb-3" type="text"/>
      <input id='cp'        value={form.cp}         onChange={handleInput} placeholder="Introduce la Codigo Postal"      className="form-control mb-3" type="text"/>
      <input id='ciudad'    value={form.ciudad}     onChange={handleInput} placeholder="Introduce la provincia"          className="form-control mb-3" type="text"/>
      <input id='telefono'  value={form.telefono}   onChange={handleInput} placeholder="Introduce el número de telefono" className="form-control mb-3" type="text"/>
      <button type="submit" className="btn btn-success mb-3 ">Registrar</button>
    </form>
  );
}