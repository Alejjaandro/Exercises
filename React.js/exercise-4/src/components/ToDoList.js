import './ToDoList.css'
export default function ToDoList({toDoList, setList}) {

  /* 
  Copiamos el array original (toDoList) en uno nuevo (updateTodos) para poder modficarlo.
  Accedemos al que queremos modificar mediante su "index" e invertimos su valor.
  Reescribimos el valor original de "toDoList" por el nuevo "updateToDoList"  
  */

  function toogle (e, index) {

    if (e.target.tagName !== "BUTTON") {
      const updateToDoList = [...toDoList];
      updateToDoList[index].completed = !updateToDoList[index].completed;
      setList(updateToDoList);
    }
  };

  function removeToDo (title) {
    setList(toDoList.filter(todo => todo.title !== title));
  }

  return (
    <ul className='list-group mb-3'>
    {toDoList.map((toDoList, index) => {

      return <li className={`d-flex justify-content-between list-group-item ${toDoList.completed ? "completed" : ""}`} onClick={e => toogle(e, index)} key={index}>
        <span>{index}: {toDoList.title}</span>

        <button className='btn btn-danger' onClick={() => removeToDo(toDoList.title)}>X</button>
      </li>

    })}
    </ul>
  )};