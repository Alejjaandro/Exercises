import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { createContext, useState } from 'react';

import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";
import useFetch from './hooks/useFetch';

export const GlobalContext = createContext({});

export default function App() {

  const initialContactState = [
    {nombre: "Juan", apellidos: "Gonzalez Blanco", direccion: "Los guindos", ciudad: "Malaga", cp: 29003, telefono: 652346936},
    {nombre: "Emilio", apellidos: "Escobar Gaviria", direccion: "Manuel Altolaguirre", ciudad: "Malaga", cp: 29006, telefono: 472956186},
    {nombre: "María", apellidos: "Perez Galdos", direccion: "Santa Paula", ciudad: "Malaga", cp: 29005, telefono: 952369716},
  ]

  const [contacts, setContacts] = useState(initialContactState);
  
  const [toDoList, setList] = useState([]);

  const API_TODOS = "https://jsonplaceholder.typicode.com/todos";
  useFetch(API_TODOS, setList);

  return (
    <div className="App">
      <BrowserRouter>

        <nav className='navbar bg-dark px-5 py-3'>
          <NavLink to="/" className="text-decoration-none text-light"> Ejercicio 1 </NavLink>
          <NavLink to="/ejercicio2" className="text-decoration-none text-light"> Ejercicio 2 </NavLink>
          <NavLink to="/ejercicio3" className="text-decoration-none text-light"> Ejercicio 3 </NavLink>
          <NavLink to="/ejercicio4" className="text-decoration-none text-light"> Ejercicio 4 </NavLink>
        </nav>

        <GlobalContext.Provider value={{contacts, setContacts, toDoList, setList}}>

          <Routes>
            <Route path="/" element={<Ejercicio1/>} />
            <Route path="/ejercicio2" element={<Ejercicio2/>} />
            <Route path="/ejercicio3" element={<Ejercicio3/>} />
            <Route path="/ejercicio4" element={<Ejercicio4/>} />
          </Routes>

        </GlobalContext.Provider>

      </BrowserRouter>
    </div>
  );
}