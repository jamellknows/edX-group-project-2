import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/locations/search'

export default {
    search: function(query) {
        return axios.get(url, { 
            headers: {
                'X-RapidAPI-Key': '289a29c09emsh67b645d76a420f4p19e2ffjsn3ff56d782897',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            },
            params: {
                query: `${query}`,
                limit: '30',
                offset: '0',
                units: 'km',
                location_id: '1',
                currency: 'GBP',
                sort: 'relevance',
                lang: 'en_US'
            }
        })   
    }
}