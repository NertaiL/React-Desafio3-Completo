import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CartelAlert from './components/CartelAlert';
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from "react";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores); //data que viene de basecolaboradores
  const [filtrarColaboradores, setFiltrarColaboradores] = //data filtrda
    useState(colaboradores);
  const [alert, setAlert] = useState({
    error :'',
    mensaje :'',
    color: "",
  })

  return (
    <main>

      <article>

      <Buscador
        colaboradores={colaboradores}
        filtrarColaboradores={setFiltrarColaboradores} //filtrarColaboradores
      />
      <Listado
        colaboradores={colaboradores}
        setColaboradores={setColaboradores}
        filtrarColaboradores={filtrarColaboradores}
        setFiltrarColaboradores={setFiltrarColaboradores}
      />
      </article>
      

      <aside>

      <Formulario  colaboradores={colaboradores}
        setColaboradores={setColaboradores}
        setFiltrarColaboradores={setFiltrarColaboradores}
        setAlerta={setAlert} />
        {alert.mensaje && <CartelAlert color ={alert.color}>{alert.mensaje}</CartelAlert>}
      </aside>
      
    </main>
  );
}

export default App;
