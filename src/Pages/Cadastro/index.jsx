import { useState } from "react";
import { LayoutComponents } from "../../Components/"
import jpIMG from '../../assets/lapisco.png'
import jpIMG2 from '../../assets/image 5.png';
import { FaUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { BiSolidCity } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";


import "../../Global/global.css"





export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [curso, setCurso] = useState("");
  const [insti, setInsti] = useState("");
  const [phone, setphone] = useState("");
  const [city, setCity] = useState("");
  const [Lattes, setLattes] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const navigate = useNavigate();


  return (
    <div className="body">
   
   
    <div>
    <LayoutComponents >
         <span className="login-form-title">
          <img src={jpIMG} alt="Lapisco" />
        </span>

      <form className="login-form">
        <span className="login-form-title"> Por Favor, preencha todos campos abaixo. </span>

    {/**---------------------------------------------------------------- */}   

        <div className="wrap-input">
        <FaUser className="icon" />
          <input
          
            className={name !== "" ? "has-val input" : "input"}
            type="email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
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
        <div className="wrap-input">
        <IoSchool className="icon" />
          <input
            className={curso !== "" ? "has-val input" : "input"}
            type="text"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          />
          
          <span className="focus-input" data-placeholder="Curso"></span>
        </div>
{/**---------------------------------------------------------------- */}
        <div className="wrap-input">
        <FaSchoolFlag className="icon" />
          <input
            className={insti !== "" ? "has-val input" : "input"}
            type="text"
            value={insti}
            onChange={(e) => setInsti(e.target.value)}
          />
          

          <span className="focus-input" data-placeholder="Instituição"></span>
        </div>
        {/**---------------------------------------------------------------- */}
        <div className="wrap-input">
        <FaPhone className="icon" />
          <input
            className={phone !== "" ? "has-val input" : "input"}
            type="tel"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
         

          <span className="focus-input" data-placeholder="Telefone"></span>
        </div>
        {/**---------------------------------------------------------------- */}

        <div className="wrap-input">
        <BiSolidCity className="icon" />
          <input
            className={city !== "" ? "has-val input" : "input"}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          

          <span className="focus-input" data-placeholder="Cidade"></span>
        </div>
         {/**---------------------------------------------------------------- */}

        <div className="wrap-input">
        <PiStudentBold  className="icon" />
          <input
            className={Lattes !== "" ? "has-val input" : "input"}
            type="url"
            value={Lattes}
            onChange={(e) => setLattes(e.target.value)}
          />
          

          <span className="focus-input" data-placeholder="Lattes"></span>
        </div>
         {/**---------------------------------------------------------------- */}


        <div className="wrap-input">
        <FaGithub className="icon" />
          <input
            className={github !== "" ? "has-val input" : "input"}
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          

          <span className="focus-input" data-placeholder="Github"></span>
        </div>
         {/**---------------------------------------------------------------- */}
         
         <div className="wrap-input">
         <FaLinkedin className="icon" />
          <input
            className={linkedin !== "" ? "has-val input" : "input"}
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
          />

          <span className="focus-input" data-placeholder="Linkedlin"></span>
        </div>

 {/**---------------------------------------------------------------- */}
        <div className="wrap-input">
        <FaKey className="icon" />
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         

          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

 {/**---------------------------------------------------------------- */}
       
 <div className="checkboxes">
  <span className="login-form-title2">Você é:</span>
              <input type="checkbox" id="checkbox1" name="checkbox1" />
              <label htmlFor="checkbox1">Aluno</label>

              <input type="checkbox" id="checkbox2" name="checkbox2" />
              <label htmlFor="checkbox2">Professor</label>

              {/* Adicione mais checkboxes conforme necessário */}
            </div>

           

        <div className="container-login-form-btn">
          <button className="login-form-btn">Cadastrar</button>
        </div>

        <div className="text-center2">
          <h3 className="txt1"
          onClick={()=> {navigate("/")}}>
            Já possui conta? </h3>
          
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