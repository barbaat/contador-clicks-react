import React from 'react';
import '../stylesheets/Boton.css';

export default function Boton({ texto, esClickable, eventoClick }) {
    return (
        <button 
            className={ esClickable ? 'boton-clic' : 'boton-reiniciar' }
            onClick={eventoClick}>
            {texto}
        </button>
    );
}