
import styled from 'styled-components'

const ContenedorResumen = styled.div`
padding: 1rem;
border-radius: 10px;
text-align: center;
background-color:  #00c5ff;
color: #FFF;
margin-top: 1rem
`
const Resumen = ({datos}) => {

    const {marca, year, plan} = datos
    if(marca === "" || year === "" || plan === ""){
        return null;                
    } 

    return ( 
        
        <ContenedorResumen>
        <h2>Resumen de la Cotización</h2> 
        <ul>
            <li>Marca: {marca} </li>
            <li>Plan: {plan}</li>
            <li>Año del Auto: {year}</li>
        </ul>
        </ContenedorResumen>
        
       
    );
}
 
export default Resumen;