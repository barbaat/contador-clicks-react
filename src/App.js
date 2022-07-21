import './stylesheets/App.css';
import logoFreeCode from './images/logo2.svg';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0);
  
  const manejarClick = () => {
    setContador(contador + 1);
  }

  const reiniciarContador = () => {
    setContador(0);
  }
  
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={logoFreeCode} 
          alt='Logo predeterminado' />
      </div>
      
      <Contador
          numClicks={contador}
        />
      
      <div className='contenedor-principal'>
        <Boton 
          texto='Aumentar clicks'
          esClickable={true}
          eventoClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esClickable={false}
          eventoClick={reiniciarContador}
        />
      </div>  
    </div>
  );
}

export default App;
