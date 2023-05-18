import { useState } from 'react';
import React from 'react';
import './App.css';
import './componentes/Card-1'
import Card1 from './componentes/Card-1';
import Card2 from './componentes/Card-2';
import siguiente from './imagenes/icon-next.png';
import anterior from './imagenes/icon-prev.png';
import Botones from './componentes/Botones';

function App() {

 

  return (
    <div className="App">
    <Card1 />
    
    </div>
  );
}

export default App;
