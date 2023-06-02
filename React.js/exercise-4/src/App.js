import './App.css';
import { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

import ToDoList from './components/ToDoList';
import AddForm from './components/AddForm';


function App() {

  const API_TODOS = "https://jsonplaceholder.typicode.com/todos"
  
  const [list, setList] = useState([]);

  useFetch(API_TODOS, setList);// Abstraemos el Fetch en un hook propio. 
  
  // useEffect(() => {
  //   fetch(API_TODOS)
  //   .then(response => response.json())
  //   .then(data => setList(data.slice(0, 20)));
  // }, []);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <AddForm setList={setList}></AddForm>
      <ToDoList toDoList={list} setList={setList}></ToDoList>
    </div>
  );
}

export default App;
