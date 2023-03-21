import "./style.css"
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button'
import { useState } from "react";
import  API  from './api'

const Search = () => {

    const [countryValue, setCountryValue] = useState("")
    const [cityValue, setCityValue] = useState("")
    // const data = (localStorage.getItem('searchResults') == null) ? JSON.parse(localStorage.getItem('searchResults')) : [];

    const searchCountry = query =>{
        API.search(query)
        .then(res => setLocationData(res))       
        .catch(err => console.log(err))
    }

    const searchCity = query =>{
        API.search(query)
        .then(res => setLocationData(res))       
        .catch(err => console.log(err))
    }

    const setLocationData = arr =>{
        let locationInfo = arr.data.data;
        console.log(locationInfo);
    }

    return (
        <div className="container-fluid">
            <div className="search-page d-flex  flex-column offset-md-4 mt-5">
                <div className="search-inputs d-flex mt-5 center-block">
                    <div className="input-group mx-auto mt-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1" onClick={() =>{searchCountry(countryValue)}}>Search By Country</span>
                        </div>
                        <input id="country-input" value={countryValue} onChange={evt => setCountryValue(evt.target.value) } type="text" className="form-control" placeholder="Country" aria-label="Country" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
                <div className="search-inputs d-flex mt-5 ">
                    <div className="input-group mx-auto">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1" onClick={searchCity(cityValue)}>Search By City</span>
                        </div>
                        <input id="city-input" value={cityValue} onChange={evt => setCityValue(evt.target.value) } type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search