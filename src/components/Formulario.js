
import {useState} from 'react';
import {getdiferenciaYear, calculoPorMarca, obtenerPlan} from '../helper'

import styled from "styled-components";

//styled components

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;
const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00c5ff;
    border-radius: 5px;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover {
        background-color: #e96443;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;




const Formulario = ({setResumen, setCargando}) => {

    //CREAMOS EL USESTATE DEL FORMULARIO PARA IR TOMANDO LOS DATOS

    const [datos, setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

   const [errorCampo, setErrorCampo] = useState(false)

    //EXTRAEMOS LOS VALORES DEL STATE
    const {marca, year, plan} = datos;

    

        // LEEMOS LOS DATOS DEL FORMULARIO CON EL SETSTATE ESTA FUNCION VA DENTRO DEL ONCHANGE DE CADA CAMPO DEL FORMULARIO.
        const obtenerInformacion = e => {
          
            setDatos ({
               ...datos, // TOMA LOS DATOS QUE YA HABRÍA
                [e.target.name] : e.target.value, // RECOPILA LOS DATOS CON E.TARGET.VALUE
               
            })
            
        }

        // al hacer submit......
        const cotizarSeguro = e => {
            e.preventDefault();           
            if(marca === "" || year === "" || plan === "")
            {
                setErrorCampo(true);
                return;
            }
            setErrorCampo(false);

            //Usamos una base de VALORDESEGURO de 2000
            let valorSeguro = 2000;
            // obtener la diferencia de años
            const diferenciaYear = getdiferenciaYear(year)
            console.log(diferenciaYear)

            // por cada año restamos el 3%
            valorSeguro -= ((diferenciaYear * 0.03) * valorSeguro)
            console.log(valorSeguro)

            // INCREMENTO SEGUN EL CONTINENTE:
            // Americano +15%
            // Asiatico +5%
            // Europeo +30%

            valorSeguro = calculoPorMarca(marca) * valorSeguro;
           

            // SELECCION DEL PLAN
            const incrementoPlan = obtenerPlan(plan);          
            valorSeguro = parseFloat(incrementoPlan * valorSeguro).toFixed(2);

        
            setCargando(true);
 
            setTimeout(() =>{
     
                //Quita el spinner
                setCargando(false);
     
                //pasa la informacion al componente principal
                setResumen ({
                    cotizacion: valorSeguro,
                    datos
                });
            }, 3000);
     
    

           

            // PASAMOS LOS DATOS Y LA COTIZACIÓN DENTRO DE SETRESUMEN, PARA QUE PUEDAN VOLVER A LA APP.JS(EL PARENT)    
            
        

        }

    return ( 
        
       <form
         onSubmit={cotizarSeguro}
        >
            {errorCampo ? <Error>Todos los Campos son Obligatorios</Error> : null }
           <Campo>
               <Label>Marca</Label>
               <Select
                name='marca'
                value={marca}
                onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
               </Select>
           </Campo>
           <Campo>
               <Label>Años</Label>
               <Select
                name='year'
                value={year}
                onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
               </Select>
           </Campo>
           <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}

                    
                /> Básico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion}
                    
                /> Completo
            </Campo>

            <Boton type='submit'>Cotizar</Boton>
       </form>

     );
}
 
export default Formulario;