import React from 'react';
import { Register } from './Pages/Cadastro';
import { Login } from './Pages/Login';
import "./Global/global.css"
import jpIMG2 from './assets/image 5.png';
import { BrowserRouter } from "react-router-dom";
import { Router } from './Rotas/Router';

export function App() {
  return (
    <BrowserRouter>
  
    <Router/>
    </BrowserRouter>
 
  
 
  );
}

export default App;
