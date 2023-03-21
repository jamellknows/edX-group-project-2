import axios from 'axios';


const CountrySearch = async (country) => {
    console.log(country)
    let data = localStorage.getItem('searchResults') ? JSON.parse(localStorage.getItem('searchResults')) : [];
    const url = 'https://travel-advisor.p.rapidapi.com/locations/search'
    const res = await axios.get(url, { 
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
        }).then (function(res){
            data = res.data.data
            localStorage.setItem('searchResults', JSON.stringify(data));
            console.log(res[0].data);

        }).catch(function(error){
            console.log(error)
        })
     
        
}


export default CountrySearch