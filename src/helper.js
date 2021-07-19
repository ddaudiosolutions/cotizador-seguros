export function getdiferenciaYear(year){
    return new Date().getFullYear() - year;
   
}

// CALCULAR EL TOTAL A PAGAR SEGUN MARCA
export function calculoPorMarca (marca){
    let incremento;

    switch(marca){
    case 'europeo':
        incremento = 1.30;
        break;
    case 'americano':
        incremento = 1.15;
        break;
    case 'asiatico':
        incremento = 1.05;
        break;

    default:
        break;
    }

    return incremento
}

// CALCULA PLAN DE SEGURO BASICO O COMPLETO

export function obtenerPlan(plan)
{
    return (plan === 'basico') ? 1.20 : 1.50
}