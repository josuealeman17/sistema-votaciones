import React, { useState } from "react";
import Footer from "../components/Footer";
import "../style/Home.css";
import ValidacionCedula from "../class/usuario";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";

export const Home = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {cedula, contraseña, onInputChange} =
    useForm({
      cedula: '',
      contraseña: '',
    });

  const handleSubmit = (event) => {
    event.preventDefault();

    const validador = new ValidacionCedula();
    validador.setCedula(cedula);
    validador.setContraseña(contraseña);
    validador.validacionCedula();
    const cedulaValida = validador.getValido();

    if (!cedulaValida) {
      setError("*Cédula o Contraseña inválida.");
      return;
    }

    navigate('/ListaElecciones' , {
      replace: true,
      state: {
        logged: true,
        cedula,
        contraseña
      },
    });
  };

  return (
    <>
      <section className="home">
        <div className="titulo" style={{ cursor: "default" }}>
          I N I C I A R &nbsp; S E S I Ó N
        </div>
        <div className="lineBlock"/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="GET-cedula" style={{ marginRight: "80px" }}>
            Cédula
          </label>
          <input
            id="GET-cedula"
            type="text"
            name="cedula"
            placeholder="Cédula"
            value={cedula}
            onChange={onInputChange}
            required
          />
          <br />
          <label htmlFor="GET-contraseña" style={{ marginRight: "48px" }}>
            Contraseña
          </label>
          <input
            id="GET-contraseña"
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={contraseña}
            onChange={onInputChange}
            required
          />
          <br />
          <button type="submit">Aceptar</button>
          {error && <p className="error" style={{color: "red"}}>{error}</p>}
        </form>
      </section>
      <Footer />
    </>
  );
};
