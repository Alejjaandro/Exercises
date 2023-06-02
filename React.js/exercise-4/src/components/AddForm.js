import {useState} from 'react'

export default function AddForm({setList}) {

  const [newToDo, setNewToDo] = useState("");

  function handleSubmit (e) {
    e.preventDefault();

    /* 
    Usamos una funcion para acceder al valor de "currentToDo" sin tener que meterlo por props.
    Ponemos las llaves al principio para que el nuevo objeto aparezca el primero y luego [...currentToDo].
    */
    setList(currentToDo => [{title: newToDo, completed: false}, ...currentToDo]);

    setNewToDo("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='my-4 mx-4'>
        <input 
          className='form-control mb-3' 
          onChange={e => setNewToDo(e.target.value)} 
          value={newToDo} 
          type="text" placeholder='Añade una tarea'
        />
      </form>
    </div>
  )
}
