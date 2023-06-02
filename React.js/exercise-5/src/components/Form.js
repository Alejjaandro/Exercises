import React, { useState } from 'react'

export default function Form({setContacts}) {
   
  const initialState = {
    nombre: "",
    apellidos: "",
    direccion: "",
    cp: "",
    ciudad: "",
    telefono: "",
  }
  const [form, setForm] = useState(initialState)

  function handleInput (e) {
    const inputName = e.target.id;
    const newValue = e.target.value;

    setForm({...form, ...{[inputName]: newValue}});
  }

  function submit (e) {
    e.preventDefault();

    const newContact = {
      nombre: form.nombre,
      apellidos: form.apellidos,
      direccion: form.direccion,
      cp: form.cp,
      ciudad: form.ciudad,
      telefono: form.telefono,
    };

    setContacts(currentContacts => [...currentContacts, newContact]);
    
    setForm(initialState);
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