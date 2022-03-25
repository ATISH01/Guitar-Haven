import React from 'react';
import './InfoGuitar.css';

const InfoGuitar = (props) => {
    const {name}=props.info;
    

    return (
        <div className='guitar-info'>
            <h2>Name:{name}</h2>
            
        </div>
    );
};

export default InfoGuitar;