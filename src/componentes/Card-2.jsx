

import john from '../imagenes/image-john.jpg';
import comillas from  '../imagenes/pattern-quotes.png';
import fondo from '../imagenes/pattern-bg.png';
import '../estilos/card.css';
import '../estilos/card.css';
import Botones from './Botones';
import { useState } from 'react';
function Card2 (proxima, volver){


    
    return(

        <div className={"contenedor-card " + volver} >
            <div className="img">
                <img className='fondo' src=
                {fondo} alt='fondo'/>
                <img className="imagen" src= {john}  alt="john"/>
                
            </div>
            <div className="contenedor-texto">

                <div className="descripcion">
                    <img src={comillas} alt="comillas" className="comillas" />
                    <p className="parrafo">
                    “ If you want to lay the best foundation possible I’d recommend taking this course. 
                    The depth the instructors go into is incredible. I now feel so confident about 
                    starting up as a professional developer. ”
                    </p>

                </div>
                <div className="nombres">
                    <p className="nombre">
                        John Tarkpor
                    </p>
                    <p className="cargo">
                        Junior Front-end Developer
                    </p>
                </div>
            </div>

        </div>


    )

}

export default Card2