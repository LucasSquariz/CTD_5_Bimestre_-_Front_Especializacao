import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import {ContextProvider} from "./context/contextoFormulario";


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/formularioEntrada" element={<Formulario />} />
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
