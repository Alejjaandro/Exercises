import { useState } from 'react';
import useFetch from '../hooks/useFetch';

import ToDoList from '../components/ToDoList';
import AddForm from '../components/AddForm';


export default function Ejercicio4() {

  const API_TODOS = "https://jsonplaceholder.typicode.com/todos"
  
  const [list, setList] = useState([]);

  useFetch(API_TODOS, setList);
  
  return (
    <div className='container'>
      <h1>To Do List</h1>
      <AddForm setList={setList}></AddForm>
      <ToDoList toDoList={list} setList={setList}></ToDoList>
    </div>
  );
}