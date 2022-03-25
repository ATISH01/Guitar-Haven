import React, { useEffect, useState } from 'react';
import InfoGuitar from '../InfoGuitar/InfoGuitar';
import Guitars from '../Guitars/Guitars';

import './AllGuitars.css'

const AllGuitars = () => {
    const [guitars, setGuitars] = useState([])
    
    const [guitarCart, setGuitarCart] = useState([])
    const [randomSelect, setRandomSelect] = useState([]);
    console.log(randomSelect);
    
    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setGuitars(data))
    },[])

    const handleEvent =(guitar)=>{
        const newGuitar = [...guitarCart,guitar];
        setGuitarCart(newGuitar);
        
    }

    const clean =()=>{
        console.log('clean');
        const setClean=[];
        setGuitarCart(setClean);
    }

    const random =()=>{
        let randomSelect = guitarCart[Math.floor(Math.random() * guitarCart.length)];
        setRandomSelect(randomSelect);
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

            <button onClick={clean}>Choose Again</button><br />
            <button onClick={random}>Choose For Me</button>
            <h2>Choosed For You:{randomSelect.name}</h2>
            </div>
        </div>
    );
};

export default AllGuitars;