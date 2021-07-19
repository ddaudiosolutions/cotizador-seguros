import styled from "styled-components";

const ContenedorResultado = styled.div`
padding: 1rem;
text-align: center;
font-weight: bold;
border-radius: 10px;
background-color: #00c5ff;
color: #FFF;
margin-top: 1rem
`

const Resultado = ({cotizacion}) => {   
    
    
    return ( 
        
           (cotizacion  === 0) 
           ? null
           : <ContenedorResultado>EL TOTAL DE SU SEGURO ES: {cotizacion} €</ContenedorResultado>
        
        

     );
}
 
export default Resultado;