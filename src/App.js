import {useState} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'


import styled  from 'styled-components';

const Contenedor = styled.div `
max-width: 600px;
margin:0 auto;
`

const ContendedorFormulario = styled.div`
border-radius: 10px;
background-color: #FFF;
padding: 3rem;
`;

function App() {

  //CREAMOS UN STATE PARA RECIBIR DATOS DEL FORMULAIO (CHILD TO PARENT)
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  })

    const {datos, cotizacion} = resumen;

    const [cargando, setCargando] = useState(false)

  return (   
    <Contenedor>
      <Header titulo='Cotizador de Seguros' />

      <ContendedorFormulario>
        <Formulario 
        setResumen={setResumen}
        setCargando={setCargando}
        />
      </ContendedorFormulario>

      {cargando ? (
    <Spinner />
                  ) : (
            <>
        <Resumen datos={datos} />
        <Resultado cotizacion={cotizacion} />
    </>
    )}

      
      
    </Contenedor>

   
   
  );
}

export default App;
