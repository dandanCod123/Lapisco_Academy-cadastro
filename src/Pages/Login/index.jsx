import { useState } from "react";
import { LayoutComponents } from "../../Components/"
import jpIMG from '../../assets/lapisco.png'
import jpIMG2 from '../../assets/image 5.png';
import { FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

import { useNavigate } from "react-router-dom";


import "../../Global/global.css"





export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

  return (
    <div className="body2">
   
   
    <div>
    <LayoutComponents >
         <span className="login-form-title">
          <img src={jpIMG} alt="Lapisco" />
        </span>

      <form className="login-form">
        <span className="login-form-title"> Bem-vindo, entre na sua conta para iniciar 
os seus estudos </span>

    {/**---------------------------------------------------------------- */}   

        <div className="wrap-input">
        <FaUser className="icon" />
          <input
          
            className={password !== "" ? "has-val input" : "input"}
            type="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
          
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>
{/**---------------------------------------------------------------- */}
        <div className="wrap-input">
        <MdOutlineMailOutline className="icon"/>
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          

          <span className="focus-input" data-placeholder="Email"></span>
        </div>
{/**---------------------------------------------------------------- */}


<div className="checkboxes2">
              <input type="checkbox" id="checkbox1" name="checkbox1" />
              <label htmlFor="checkbox1">lembrar de mim</label>

              
              <label className="label2">Esqueceu a senha?</label>

              {/* Adicione mais checkboxes conforme necessário */}
            </div>
      

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center2">
        
         <h3 className="txt1"
          onClick={()=> {navigate("/Register")}}>
            Não tem conta?Crie uma agora.</h3>
         
          
        </div>
      </form>
     
    </LayoutComponents>
    <span className="login-form-title">
          <img src={jpIMG2} alt="IFCE" />
        </span>

    </div>
    </div>
  )
}