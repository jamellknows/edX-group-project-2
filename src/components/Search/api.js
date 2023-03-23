import axios from 'axios';



export function locationSearch(query){
    const url = 'https://travel-advisor.p.rapidapi.com/locations/search'

    return axios.get(url, { 
        headers: {
            'X-RapidAPI-Key': 'd3220aa0c6mshc1b5d648d981c84p1d73a4jsn5d20625d379d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
        params: {
            query: `${query}`,
            limit: '1'
        }
    })   
}

export function hotelSearch(location){
    const url = 'https://travel-advisor.p.rapidapi.com/hotels/get-details'
    return axios.get(url, {
        headers: {
            'X-RapidAPI-Key': 'd3220aa0c6mshc1b5d648d981c84p1d73a4jsn5d20625d379d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
        params: {
            location_id: `${location}`,
            adults: '1',
            rooms: '1',
            nights: '2',
            offset: '0',
            currency: 'USD',
            order: 'asc',
            limit: '30',
            sort: 'recommended',
            lang: 'en_US'
        },

    })
}

export function restaurantSearch(location){
    const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list'
    return axios.get(url, {
        headers: {
            'X-RapidAPI-Key': 'd3220aa0c6mshc1b5d648d981c84p1d73a4jsn5d20625d379d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
        params: {
            location_id: `${location}`,
            restaurant_tagcategory: '10591',
            restaurant_tagcategory_standalone: '10591',
            currency: 'GBP',
            limit: '30'
        },

    })
}

export function attractionSearch(location){
    const url = 'https://travel-advisor.p.rapidapi.com/attractions/list'
    return axios.get(url, {
        headers: {
            'X-RapidAPI-Key': 'd3220aa0c6mshc1b5d648d981c84p1d73a4jsn5d20625d379d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        },
        params: {
            location_id: `${location}`,
            currency: 'GBP',
            sort: 'recommended'
        },

    })
}
