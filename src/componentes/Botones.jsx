import React from "react";
import siguiente from '../imagenes/icon-next.png';
import anterior from '../imagenes/icon-prev.png';
import '../estilos/botones.css';
import { useState } from "react";
import Card2 from "./Card-2";
import Card1 from "./Card-1";
function Botones ({volver, proxima}){

    
    return(

        <div className="contenedor-btn">
            <img src={anterior} alt="anterior" className="anterior" onClick={volver} />
            <img src={siguiente} alt="siguiente" className="siguiente" onClick={proxima} />
        </div>
        


    )
}


export default Botones