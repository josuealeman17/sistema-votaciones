import "../style/Elecciones.css";
import { useLocation } from "react-router-dom";
const { default: Footer } = require("../components/Footer");
const Candidato = require("../class/candidato");

export const Elecciones = () => {
  const candidatos = new Candidato().candidatos.candidatos;
  const { state } = useLocation();

  const handleSubmit = async (id) => {
    console.log(id);
    console.log(state.cedula);
    const cedula = state.cedula;

    const voto = { id, cedula };

    const response = await fetch("http://localhost:3000/api/votos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(voto),
    
    });
    const json = await response.json();
    console.log(json);
  };

  return (
    <>
      <section className="elecciones">
        <div className="titulo" style={{ cursor: "default" }}>
          CANDIDATOS A LA PRESIDENCIA DE LA REPÚBLICA
        </div>
        <div className="lineBlock" />
        <div className="cartilla">
          {candidatos.map((candidato, index) => (
            <div key={index} className="candidato">
              <p style={{ textAlign: "center" }}>{candidato.partido}</p>
              <img
                src={candidato.logoPartido}
                alt={candidato.nombrePartido}
                style={{ width: "50px", height: "50px" }}
              />
              <img
                src={candidato.fotoCandidato}
                alt={candidato.nombre}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "10px",
                }}
              />
              <p>{candidato.nombre}</p>

              <button
                onClick={() => {
                  handleSubmit(candidato.id);
                }}
              >
                Seleccionar
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};
