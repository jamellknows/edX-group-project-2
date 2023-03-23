import "./style.css"

// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button'
import { useState } from "react";
import { locationSearch, hotelSearch, restaurantSearch, attractionSearch } from './api'
import LoadingIcon from "./LoadingIcon";
import Banner from '../Banner'
import { useState, useContext } from "react";
import {searchDataContext} from "../../context/SearchDataProvider";
import axios from "axios";


if (localStorage.getItem("userSearch") === null) {
    localStorage.setItem("userSearch",JSON.stringify([]));
}


const Search = () => {
    const [cityValue, setCityValue] = useState("");
    const [isLoading, setLoading] = useState(false);
    let userSearchData = [];

    const apiQuery = query =>{
        console.log("searching...");
        setLoading(!isLoading);

let journeyJunkieData = {
    "country": [],
    "activities": [], 
    "flights": [],
    "hotels": [], 
    "restaurants": [], 
    "cars": []
}


let api_key = 'g_cOM4Fm_5gdpejd077YrJrGXqZTLtdn'

        locationSearch(query)
        .then(res => setLocationData(res))      
        .catch(err => console.log(err))

        const setLocationData = arr =>{
            let locationInfo = arr.data.data;
            console.log(locationInfo);
            let locationID = locationInfo[0].result_object.location_id;
            userSearchData.push(locationInfo);
            getLocationInfo(locationID);
        }

        const getLocationInfo = async location =>{
            try {
                const hotelRes = await hotelSearch(location);
                saveToStorage(hotelRes, 'hotels');
                const restaurantRes = await restaurantSearch(location);
                saveToStorage(restaurantRes, 'restaurants');
                const attractionRes = await attractionSearch(location);
                saveToStorage(attractionRes, 'attractions');

            } catch (err) {
                console.log(err);
            } finally {
                window.location.reload();
            }
        }

        const saveToStorage = (arr, type) =>{
            let result = {type: type, data: arr.data.data};
            
            userSearchData.push(result);
            localStorage.setItem("userSearch", JSON.stringify(userSearchData));
            
        }
    }

    return (
    <div className="container-fluid">
        <div className="container-fluid searchModal containerBlur">
            <h2 style={{alignSelf: "center"}}>Search for a city to begin your journey...</h2>
            {!isLoading &&(<p>Visit the Info tab to start planning your journey.</p>)}
            <div className="input-group mb-3">
                <input value={cityValue} onChange={e => setCityValue(e.target.value)}
                type="text" className="form-control" placeholder="Enter city..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button onClick={() =>{apiQuery(cityValue)}}className="btn searchButton" type="button">Search</button>


 const Search = () => {
    const [journeyStart, setJourneyStart] = useState("")
    const [countryValue, setCountryValue] = useState("");
    const [activitiesData, setActivitiesData] = useState("")
    const [advisorLocationData, setAdvisorLocationData] = useState("")
    const [restaurantData, setRestaurantData] = useState("")
    const [hotelData, setHotelData] = useState("")
    const [flightLocationData, setFlightLocationData] = useState("")
    const [flightStartData, setFlightStartData] = useState("")
    const [flightData, setFlightData] = useState("")
    const [responseData, setResponseData] = useContext(searchDataContext)
    // const data = (localStorage.getItem('searchResults') == null) ? JSON.parse(localStorage.getItem('searchResults')) : [];

    const searchCountry = async() => {
        let country = countryValue
        country.toString()
        // TRAVEL ADVISOR activities
       let url = 'https://travel-advisor.p.rapidapi.com/locations/search'
        try {
            let response = await axios.get(url, { 
                headers: {
                    'X-RapidAPI-Key': 'b39d10bcd8mshb082a80bebbbc89p116733jsn57db7d9fb4c0',
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
                    setActivitiesData(data)
                 })
        }catch(error){
            console.log(error)
        }
        console.log(activitiesData)

        url = 'https://travel-advisor.p.rapidapi.com/locations/search'
        try{
            let response = await axios.get(url, { 
                headers: {
                    'X-RapidAPI-Key': 'b39d10bcd8mshb082a80bebbbc89p116733jsn57db7d9fb4c0',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                },
                params: {
                    query: `${country}`,
                    limit: '1'
                }
            }).then(function(data){
                setAdvisorLocationData(data)

            })
        }catch(error){
            console.log(error)
        }


        url = 'https://travel-advisor.p.rapidapi.com/hotels/get-details'

        try{
            let response = await axios.get(url, {
                headers: {
                    'X-RapidAPI-Key': 'b39d10bcd8mshb082a80bebbbc89p116733jsn57db7d9fb4c0',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                },
                params: {
                    location_id: `${advisorLocationData}`,
                    adults: '1',
                    rooms: '1',
                    nights: '2',
                    offset: '0',
                    currency: 'GBP',
                    order: 'asc',
                    limit: '30',
                    sort: 'recommended',
                    lang: 'en_US'
                },
        
            }).then(function(data){
                setHotelData(data)
            })
        }catch(error){
            console.log(error)
        }
        

        
        // get restaurant data

        url = 'https://travel-advisor.p.rapidapi.com/restaurants/list'
        try{
            let response = await axios.get(url, {
                headers: {
                    'X-RapidAPI-Key': 'b39d10bcd8mshb082a80bebbbc89p116733jsn57db7d9fb4c0',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                },
                params: {
                    location_id: `${advisorLocationData}`,
                    restaurant_tagcategory: '10591',
                    restaurant_tagcategory_standalone: '10591',
                    currency: 'GBP',
                    limit: '30'
                }
            }).then(function(data){
                setRestaurantData(data)
            })

        }catch(error){
            console.log(error)
        }
        // flight locations - destination

                let options = {
                method: 'GET',
                url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
                params: {name: `${country}`},
                headers: {
                'X-RapidAPI-Key': 'b39d10bcd8mshb082a80bebbbc89p116733jsn57db7d9fb4c0',
                'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
                }
                };
        
                axios.request(options).then(function (response) {
                setFlightLocationData(response)
                }).catch(function (error) {
                console.error(error);
                });
                console.log(flightData)
        

                let dest_city_code = flightLocationData.data[0].cityCode

                options = {
                method: 'GET',
                url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/locations',
                params: {name: `${journeyStart}`},
                headers: {
                'X-RapidAPI-Key': 'b39d10bcd8mshb082a80bebbbc89p116733jsn57db7d9fb4c0',
                'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
                }
                };
        
                axios.request(options).then(function (response) {
                setFlightStartData(response)
                }).catch(function (error) {
                console.error(error);
                });

                let start_city_code = flightStartData.data[0].cityCode

         
                 options = {
                    method: 'GET',
                    url: 'https://priceline-com-provider.p.rapidapi.com/v1/flights/search',
                    params: {
                      date_departure: '2023-07-22',
                      location_departure: `${start_city_code}`,
                      location_arrival: `${dest_city_code}`,
                      class_type: 'ECO',
                      sort_order: 'PRICE',
                      itinerary_type: 'ONE_WAY',
                      price_min: '100',
                      date_departure_return: '2023-07-23',
                      number_of_passengers: '1',
                      price_max: '20000',
                      duration_max: '2051',
                      number_of_stops: '1'
                    },
                    headers: {
                      'X-RapidAPI-Key': 'b39d10bcd8mshb082a80bebbbc89p116733jsn57db7d9fb4c0',
                      'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
                    }
                  };
        
                    axios.request(options).then(function (response) {
                    setFlightData(response)
                    }).catch(function (error) {
                    console.error(error);
                    });
         
             if(countryValue.length > 0){
                journeyJunkieData.country.push(countryValue)
             }
             if(activitiesData.length > 0){
                journeyJunkieData.activities.push(activitiesData)
             }
             if(flightData.length > 0){
                journeyJunkieData.flights.push(flightData)
             }
             if(hotelData.length > 0){
                journeyJunkieData.hotels.push(hotelData)
             }
             if(restaurantData.length > 0){
                journeyJunkieData.restaurants.push(restaurantData)
             }
              
                setResponseData(journeyJunkieData)
                localStorage.setItem('journeyJunkieData', JSON.stringify(responseData))
                console.log(journeyJunkieData)
    }

    return (
        <>
        <Banner/>
        <div className="container-fluid">
            <div className="search-page d-flex  flex-column offset-md-4 mt-5">
                <div className="search-inputs d-flex mt-5 center-block">
                    <div className="input-group mx-auto mt-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1" >Journey Start</span>
                        </div>
                        <input id="country-input" value={journeyStart} onChange={evt => setJourneyStart(evt.target.value) } type="text" className="form-control" placeholder="Start" aria-label="Country" aria-describedby="basic-addon1"></input>
                    </div>
                    <div className="input-group mx-auto mt-5">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1" onClick={searchCountry}>Journey End</span>
                        </div>
                        <input id="country-input" value={countryValue} onChange={evt => setCountryValue(evt.target.value) } type="text" className="form-control" placeholder="End" aria-label="Country" aria-describedby="basic-addon1"></input>
                    </div>
                </div>
               
                 
               
            </div>
            {isLoading &&(<LoadingIcon/>)}
        </div>
    </div>
    );
}

export default Search;