import React from 'react';
import './Guitars.css'

  

const Guitars = (props) => {
    const{handleEvent}=props;
    const {img,name}=props.guitar;

    
    return (
        <div className='guitars'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <button onClick={()=>handleEvent(props.guitar)} 
            className='btn'><p>Details</p></button>
            
            
            
        </div>
    );
};

export default Guitars;