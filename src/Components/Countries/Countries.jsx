import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

// country visit
const Countries = () => {
    const [countries,setCountries]=useState([]);
const [visetedCountries,setVisitedCountries]=useState([])
// county visit flag
const [visitedFlags,setVisitedFlags]= useState ([]);

    useEffect(()=>{
fetch ('https://restcountries.com/v3.1/all')
.then(res =>res.json())
.then(data=>setCountries(data));

    },[])
// visited country
    const handleVisitedCountry=country=>{
        // console.log('add your country');
        // console.log(country);
        visetedCountries.push(country);
        const newVisitedCountries=[...visetedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
// visited country flag
const handleVisitedFlag=flag=>{
    const newVisitedFlags=[...visitedFlags,flag]
    setVisitedFlags(newVisitedFlags);
}

// remove iteam from an array in a state
// use filter to select alll the elements expect


    return (
        <div>
          {/* <h3>countries:{countries.length}</h3> */}
          {/* visited county   flag*/}

          {/* county visited */}
<div>

    <h5>Visited countryies{visetedCountries.length}:</h5>
    <ul>
        {
            visetedCountries.map(country => <li key={country.cca3}>{country.name.common}</li> )
        }
    </ul>
</div>


{/* flag display */}
<div className="s">

{
    visitedFlags.map((flag,idx) => <img id="flag-img" key={idx} src={flag}></img> )
}
</div>


{/* display country */}

          <div className="country-container ">
          {
      countries.map(country=> <Country key={country.cca3} 
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}
      country={country}></Country>)
         }
          </div>
        
        </div>
    );
};

export default Countries;