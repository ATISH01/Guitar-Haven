
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Guitars.css'

  

const Guitars = (props) => {
    const{handleEvent}=props;
    const {img,name}=props.guitar;

    
    return (
        <div className='guitars'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <div className="icon">
            <button onClick={()=>handleEvent(props.guitar)} 
            className='btn'><p>Buy</p><FontAwesomeIcon icon={faShoppingBasket} /></button>
             
            </div>
            
            
            
        </div>
    );
};

export default Guitars;