import { Outlet, useLocation } from "react-router-dom";
import "../style/Header.css";

export const Header = () => {

  const {state} = useLocation();

  return (
    <>
      <div className="Banner">
        <img
          src="https://yt3.googleusercontent.com/ytc/AIf8zZTne41agVrBXBAb-OpKVNmQny3Bt21PAoxt2fVaCg=s900-c-k-c0x00ffffff-no-rj"
          alt="CneLogo"
          width={70}
          style={{ zIndex: -1, marginBottom: "-9px" }}
        />
        <div className="titulo">
          S I S T E M A &nbsp; D E &nbsp; E L E C C I O N E S
        </div>
        <div className="usuario" style={{letterSpacing: state?.logged ? "1.1px" : "0"}}>{state?.logged ? state?.cedula : "No registrado"}</div>
      </div>
      <div className="LineBanner" />
      <Outlet/>
    </>
  );
};