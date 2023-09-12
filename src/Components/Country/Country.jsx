import { useState } from 'react';
import './Country.css'


const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    const{name,flags,population
        ,area,maps,cca3
    }=country;
    console.log(country);


    // visit 
const[viseted,setVisited]=useState(false);
const handleVisited=()=>{
    setVisited(!viseted);
}
// const passWithParms=()=> handleVisitedCountry(country);



console.log(handleVisitedCountry);
    return (
        <div >
           <div className={`country ${viseted && 'visited'}`}>
            <h1 style={{color:viseted?'black':'white'}}> {name?.common}</h1>
            <img src={flags.png} alt="" id='flag-icon' />
            <p>population:{population}</p>
            <p>area:{area}</p>
            <p><small>code:{cca3}</small></p>
           
<div><button className='btn' onClick={()=> handleVisitedCountry(country)}>mak visited</button></div>
<br/>
<div><button className='btn' onClick={()=>handleVisitedFlag(country.flags.png)}>add flag</button></div>
<br />
           <div> <button className='btn' onClick={handleVisited} >{viseted ? 'Visited':'Going' }</button>
            {viseted  ?'I have  visited this country ' :'I want to visited'}</div>

            </div> 

           

           
        </div>
    );
};

export default Country;