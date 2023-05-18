import { useState } from 'react';

import comillas from  '../imagenes/pattern-quotes.png';
import fondo from '../imagenes/pattern-bg.png';
import '../estilos/card.css';


import datos from '../imagenes/objetos.json';
import anterior from '../imagenes/icon-prev.png';
import siguiente from '../imagenes/icon-next.png';
import '../estilos/botones.css';

function Card1  (){
 
    
    const [ data , setData] = useState(datos[0])

    // const Objetos = () => {
    //     return new Promise((resolve, reject) => {
    //         resolve (data)
    //     })
    // }



    const next = () => {
        setData(datos [1])
    }

    const prev = () => {
        setData(datos [0])
    }
    
    return(
        
        <div className= {"contenedor-card "} >
            <div className="img">
                <img className='fondo' src=
                {fondo} alt='fondo'/>
                <img className="imagen" src= {require(`../imagenes/${data.imagen}`)}  alt={data.nombre}/>
                <div className="contenedor-btn">
                    
                        <img src={anterior} alt="anterior" className="anterior" onClick={prev} />
                        <img src={siguiente} alt="siguiente" className="siguiente" onClick={next} />
                </div>
            </div>
            <div className="contenedor-texto">

                <div className="descripcion">
                    <img src={comillas} alt="comillas" className="comillas" />
                    <p className="parrafo ">
                        {data.comentario}
                    </p>
                
                </div>
                <div className="nombres ">
                    <p className="nombre">
                        {data.nombre}
                    </p>
                    <p className="cargo">
                        {data.cargo}
                    </p>
                </div>
            </div>

        </div>





    )


}

export default Card1
