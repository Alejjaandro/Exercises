import ToDoList from '../components/ToDoList';
import AddForm from '../components/AddForm';


export default function Ejercicio4() {  
  return (
    <div className='container'>
      <h1>To Do List</h1>
      <AddForm></AddForm>
      <ToDoList></ToDoList>
    </div>
  );
}