import React, { useEffect, useState } from 'react';
import InfoGuitar from '../InfoGuitar/InfoGuitar';
import Guitars from '../Guitars/Guitars';

import './AllGuitars.css'

const AllGuitars = () => {
    const [guitars, setGuitars] = useState([])
    
    const [guitarCart, setGuitarCart] = useState([])
    
    
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setGuitars(data))
    },[])

    const handleEvent =(guitar)=>{
        const newGuitar = [...guitarCart,guitar];
        setGuitarCart(newGuitar);
        
    }

    

    return (
        <div className='all-Guitars'>
            <div className='Guitars-list'>
                {
                    guitars.map(guitar=> <Guitars guitar={guitar} key={guitar.id}
                        handleEvent={handleEvent} ></Guitars>)
                } 
            </div>
            <div className='Guitars-details' ><h1>Guitars Details</h1>
            {guitarCart.map(info=> <InfoGuitar info={info}></InfoGuitar>)}

            
            </div>
        </div>
    );
};

export default AllGuitars;