import "./style.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button'
import Banner from '../Banner'
import { useState, useEffect, useContext } from "react";
import  API  from './api';
import {searchDataContext} from "../../context/SearchDataProvider";
import axios from "axios";




const Search = () => {

    const [countryValue, setCountryValue] = useState("");
    const [responseData, setResponseData] = useContext(searchDataContext)
    // const data = (localStorage.getItem('searchResults') == null) ? JSON.parse(localStorage.getItem('searchResults')) : [];

    const searchCountry = async(country) => {
        country.preventDefault()
        const url = 'https://travel-advisor.p.rapidapi.com/locations/search'
        try {
            let response = await axios.get(url, { 
                headers: {
                    'X-RapidAPI-Key': '289a29c09emsh67b645d76a420f4p19e2ffjsn3ff56d782897',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                },
                params: {
                    query: `${country}`,
                    limit: '30',
                    offset: '0',
                    units: 'km',
                    location_id: '1',
                    currency: 'USD',
                    sort: 'relevance',
                    lang: 'en_US'
                }      
                 }).then(function(data){
                    setResponseData(data)
                 })
        }catch(error){
            console.log(error)
        }
        console.log(responseData)
        localStorage.setItem('travelApiData', JSON.stringify(responseData))
        try{
            let url = 'https://skyscanner44.p.rapidapi.com/fly-to-country'
            let response = await axios.get(url, {
                params: {
                    destination: 'SI',
                    origin: 'MUC',
                    departureDate: '2023-07-01',
                    returnDate: '2023-07-21',
                    currency: 'EUR',
                    locale: 'en-GB',
                    country: 'UK'
                  },
                  headers: {
                    'X-RapidAPI-Key': '289a29c09emsh67b645d76a420f4p19e2ffjsn3ff56d782897',
                    'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
                  }

            })

        }catch(error){
            console.log(error)
        }
    }

    function searchCity(event){
        event.preventDefault()
        // Promise.all([API(countryValue)])
        // .then(function(results){
        //     console.log(results)
        // })
    }

    return (
        <>
        <Banner/>
        <div className="container-fluid">
            <div className="search-page d-flex  flex-column offset-md-4 mt-5">
                <div className="search-inputs d-flex mt-5 center-block">
                    <div className="input-group mx-auto mt-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1" onClick={searchCountry}>Search By Country</span>
                        </div>
                        <input id="country-input" value={countryValue} onChange={evt => setCountryValue(evt.target.value) } type="text" className="form-control" placeholder="Country" aria-label="Country" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
                <div className="search-inputs d-flex mt-5 ">
                    <div className="input-group mx-auto">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1" onClick={searchCity}>Search By City</span>
                        </div>
                        <input id="city-input"type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default Search