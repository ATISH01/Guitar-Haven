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
        setRandomSelect(setClean);
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
            <div className='Guitars-details' >
                <h1>Guitars Details</h1>
            {
            guitarCart.map(info=> <InfoGuitar info={info}></InfoGuitar>)
            }

            <button onClick={clean}>Choose Again</button><br />
            <button onClick={random}>Choose For Me</button> 
            <h3> Choosed For You:<br />{randomSelect.name}</h3>
            <img className='image' src={randomSelect.img} alt="" />
            </div>
            <div className='answser'>
                <h1 className='answser-text'>Answers:</h1>
                <p className='answser-text'> 
                <h5>How React is works?</h5><br />
                    react is javascripts library.It's work with virtual dom.we can write html like element here but it's not real html.react converts it to js object.when we update in components it create
                    a virtual dom and compared with origianal dom.Then it updates only where it changed and call this specific function only. <br /><br />

                        <h5>Props vs State</h5>
                        Props: <br /> 1.Props is immutable <br />
                            2.It gets value from parent  <br />
                            3.It can pass value parent to child. <br />
                        State: <br />
                            1.State is muteable <br />
                            2.It stored property value. <br />
                            3.It created with in component but we can pass state value by props. <br />
    </p>

            </div>
        </div>
    );
};

export default AllGuitars;