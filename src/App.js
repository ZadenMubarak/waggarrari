import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";            
import 'primeicons/primeicons.css';    

import NavbarComponent from './components/NavbarComponent';
import HomePage from './pages/HomePage';

function App() {

  return (
    <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
