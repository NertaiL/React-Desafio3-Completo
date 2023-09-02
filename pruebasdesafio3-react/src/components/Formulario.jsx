import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = ({colaboradores, setColaboradores, setFiltrarColaboradores,setAlerta}) => {
const[datosColaborador,setDatoColaborador] = useState({
  nombre:"",
  correo:"",
  edad:"",
  cargo:"",
  telefono:""
})

const cambioDeEstado = (e) =>{
  const inputname={
    inputNombre: "nombre",
    inputEmail: "correo",
    inputEdad:"edad",
    inputCargo:"cargo",
    inputTelefono:"telefono"
  }

  const valor = inputname[e.target.name]
  if(valor){
    setDatoColaborador({...datosColaborador,[valor]: e.target.value})
  }
}
const validarDatos = (e) =>{
  e.preventDefault()
  const { nombre, correo, edad, cargo, telefono } = datosColaborador;
  const validarInputs = !nombre || !correo || !edad || !cargo || !telefono
  
  if(validarInputs){
    setAlerta({
      error: true,
      mensaje: "Completa los campos requeridos",
      color: "danger"
    })
    return
  }
  setAlerta({
    error: false,
    mensaje: "Colaborador Ingresado Exitosamente",
    color: "success",
  })
  // Agregar un nuevo ID al colaborador
  const nuevoColaborador = {
      ...datosColaborador,
      id: colaboradores.length + 1
  };
    
    // Agregar el nuevo colaborador al estado global
    setColaboradores([...colaboradores, nuevoColaborador]);
    setFiltrarColaboradores([...colaboradores, nuevoColaborador]);

    // Limpiar el formulario , cuando se complete exitosamente, esto va a borrar lo que se escribio en el input
    setDatoColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: ""
    });


}


  return (

    <>
    
    <h3>Agregar Colaborador</h3>
    <form onSubmit={validarDatos}>
    <Form.Group className="boxformu mb-3">
    <Form.Control className="nombre-colaborador mb-3" type="text" value={datosColaborador.nombre} placeholder="Nombre del colaborador" name="inputNombre" onChange={cambioDeEstado} />
    <Form.Control className="email-colaborador mb-3" type="email" value={datosColaborador.correo} placeholder="Email del colaborador" name="inputEmail" onChange={cambioDeEstado} />
    <Form.Control className="edad-colaborador mb-3"  type="number" value={datosColaborador.edad} placeholder="Edad del colaborador" name="inputEdad" onChange={cambioDeEstado} />
    <Form.Control className="cargo-colaborador mb-3" type="text" value={datosColaborador.cargo} placeholder="Cargo del colaborador" name="inputCargo" onChange={cambioDeEstado} />
    <Form.Control className="telefono-colaborador mb-3" type="number" value={datosColaborador.telefono} placeholder="Telefono del colaborador" name="inputTelefono" onChange={cambioDeEstado} />
    <Button variant="primary" size="lg" type='submit'>
          Agregar colaborador
        </Button>
        </Form.Group>
    </form>
    
    </>
  )
}

export default Formulario