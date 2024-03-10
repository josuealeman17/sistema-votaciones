import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../page/home";
import { Elecciones } from "../page/elecciones";
import { PrivateRoute } from "./privateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="ListaElecciones"
            element={
              <PrivateRoute>
                <Elecciones />  
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
