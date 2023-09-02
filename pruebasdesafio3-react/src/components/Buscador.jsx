import React from 'react'

const Buscador = ({colaboradores,filtrarColaboradores}) => {

  const capturarInput = (e) =>{
    const valorInput = e.target.value.toLowerCase();

    const result = colaboradores.filter((ayudante)=>
    ayudante.nombre.toLowerCase().includes(valorInput) ||
    ayudante.correo.toLowerCase().includes(valorInput)  ||
    ayudante.edad.includes(valorInput)  ||
    ayudante.cargo.toLowerCase().includes(valorInput)  ||
    ayudante.telefono.includes(valorInput)  
    )
    filtrarColaboradores(result)
  }




  return (
    <div className='buscador col-12 col-md-6'>
     <h1>Lista de Colaboradores</h1>
    <input 
    type="text"
    name='buscador'
    placeholder='Busca un colaborador'
    className='form-control mb-3'
    onChange={capturarInput}
    />
    </div>
  )
}

export default Buscador