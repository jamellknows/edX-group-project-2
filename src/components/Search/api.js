import axios from 'axios';
import {createContext, useState} from 'react';


const APIProvider = async (country) => {
    console.log(country)
    const url = 'https://travel-advisor.p.rapidapi.com/locations/search'
    const api = await axios.get(url, { 
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
})
    return api;

   
    



}




export default APIProvider;