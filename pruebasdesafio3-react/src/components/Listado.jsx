import { Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Listado = ({ colaboradores,filtrarColaboradores,setColaboradores,setFiltrarColaboradores }) => {
  const eliminarColaborador = (id) =>{
    const nuevosColaboradores = colaboradores.filter(colaboradorr => colaboradorr.id !== id)
    //actualiza colaboradores y filtrarColaboradores
    setColaboradores(nuevosColaboradores)
    setFiltrarColaboradores(nuevosColaboradores)
  }
  const participantes = filtrarColaboradores.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.id}</td>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td>
        <FaTrash onClick={()=> eliminarColaborador(colaborador.id)} />
      </td>
    </tr>
  ));
  

  return (
    <>
      <div className="table-responsive col-12 col-lg-8 mb-2 text-center">
        <Table variant="dark" className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Telefono</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>{participantes}</tbody>
        </Table>
      </div>
    </>
  );
};

export default Listado;
