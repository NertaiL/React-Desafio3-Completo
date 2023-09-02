import Alert from 'react-bootstrap/Alert';
const CartelAlert = ({color,children}) => {
  // console.log("color",color)
  return (
    <>
    

    <Alert variant={color}><h6>{children}</h6></Alert>
    </>
  )
}
//aqui lo arregle un poco, antes lo habia hecho con badge pero le puse alert como corresponde o no? jajaja 
export default CartelAlert






// const Alert = ({color,mensaje}) =>{
  //return(
    //<>
    //<Badge bg={color}>{mensaje}</Badge>
    //<Badge bg={color} text={mensaje}></Badge>
  //)
//}