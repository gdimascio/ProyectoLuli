import './App.css';
import './Componentes/STYLES/STYLE.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Componentes/Home/Home';
import Nina from './Componentes/Routes/Nina/Nina';
import Nino from './Componentes/Routes/Nino/Nino';
import Accesorios from './Componentes/Routes/Accesorios/Accesorios';

import Header from './Componentes/Header/Header';
import Contacto from './Componentes/Contacto/Contacto';
import Footer from './Componentes/Footer/Footer';

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        < Header />


        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bebe-nina' element={<Nina/>}/>
        <Route path='/bebe-nino' element={<Nino/>}/>
        <Route path='/accesorios' element={<Accesorios/>}/>
        </Routes>


        < Contacto />
        < Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
