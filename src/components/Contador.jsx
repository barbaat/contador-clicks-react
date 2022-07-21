import React from 'react';
import '../stylesheets/Contador.css';

export default function Contador ({ numClicks }) {
    return (
        <div className="contador">
            <p>{numClicks}</p>
        </div>
    );
}