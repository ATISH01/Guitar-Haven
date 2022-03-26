import React from 'react';
import './InfoGuitar.css';

const InfoGuitar = (props) => {
    const {name}=props.info;
    

    return (
        <div className='guitar-info'>
            <h4>Name:-{name}</h4>
            
        </div>
    );
};

export default InfoGuitar;