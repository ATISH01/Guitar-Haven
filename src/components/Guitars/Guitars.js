
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Guitars.css'

  

const Guitars = (props) => {
    const{handleEvent,guitar}=props;
    const {img,name,price}=guitar;

    
    return (
        <div className='guitars'>
            <div className='image-wrapper'>
            <h4>{name}</h4>
            <img src={img} alt="" />
            <p>Price:{price}$</p>
            </div>
            <div className="icon">
                
            <button onClick={()=>handleEvent(guitar)} 
            
            className='btn'><p>Buy</p><FontAwesomeIcon id='FontAwesomeIcon' icon={faShoppingBasket} /></button>
             
            </div>
            
            
            
        </div>
    );
};

export default Guitars;