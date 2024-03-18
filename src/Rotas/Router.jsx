import { Route, Routes } from "react-router-dom";
import { Login } from "../Pages/Login"; 
import { Register } from "../Pages/Cadastro"; 

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            
        </Routes>
    );
}