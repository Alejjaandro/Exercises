import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>

      <nav className='navbar bg-dark px-5 py-3'>
        <NavLink to="/" className="text-decoration-none text-light"> Ejercicio 1 </NavLink>
        <NavLink to="/ejercicio2" className="text-decoration-none text-light"> Ejercicio 2 </NavLink>
        <NavLink to="/ejercicio3" className="text-decoration-none text-light"> Ejercicio 3 </NavLink>
        <NavLink to="/ejercicio4" className="text-decoration-none text-light"> Ejercicio 4 </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Ejercicio1/>} />
        <Route path="/ejercicio2" element={<Ejercicio2/>} />
        <Route path="/ejercicio3" element={<Ejercicio3/>} />
        <Route path="/ejercicio4" element={<Ejercicio4/>} />
      </Routes>

      </BrowserRouter>
</div>
  );
}