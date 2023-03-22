import "./style.css"
import Banner from '../Banner'
import { useState, useContext } from "react";
import {searchDataContext} from "../../context/SearchDataProvider";
import axios from "axios";


let journeyJunkieData = {
    "country": [],
    "activities": [], 
    "flights": [],
    "hotels": [], 
    "restaurants": [], 
    "cars": []
}




const Search = () => {

    const [countryValue, setCountryValue] = useState("");
    const [activitiesData, setActivitiesData] = useState("")
    const [cityCode, setFlightCode] = useState("")
    const [flightData, setFlightData] = useState("")
    const [hotelCode, setHotelCode] = useState("")
    const [hotelData, setHotelData] = useState("")
    const [restaurantData, setRestaurantData] = useState("")
    const [responseData, setResponseData] = useContext(searchDataContext)
    // const data = (localStorage.getItem('searchResults') == null) ? JSON.parse(localStorage.getItem('searchResults')) : [];

    const searchCountry = async(country) => {
        country.preventDefault()
        let url = 'https://travel-advisor.p.rapidapi.com/locations/search'
        // things to do and activities
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
                    console.log(data)
                    setActivitiesData(data)
                 })
        }catch(error){
            console.log(error)
        }
        console.log("activites")
        console.log(activitiesData)
        let acttivitesreturn = activitiesData
        console.log(acttivitesreturn)
         url = "https://priceline-com-provider.p.rapidapi.com/v1/flights/locations"

        //flights and locations --
        // first get airport data 
        url = 'https://skyscanner44.p.rapidapi.com/fly-to-country'

        try{
            let response = await axios.get(url, {
                params: {query: 'berlin'},
                headers: {
                  'X-RapidAPI-Key': '289a29c09emsh67b645d76a420f4p19e2ffjsn3ff56d782897',
                  'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
                }
            }).then(function(data){
                console.log(data)
                setFlightCode(data)
            })
        }catch(error){
            console.log(error)
        }

        url = 'https://skyscanner44.p.rapidapi.com/fly-to-country'

        try{
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
            }).then(function(data){
                console.log(data)
                setFlightData(data)
            })
        }catch(error){
            console.log(error)
        }


        
       

        // hotels 
        url = 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations'
        try{

            let response = await axios.get(url, {
                params: {name: `${countryValue}`, search_type: 'ALL'},
                headers: {
                'X-RapidAPI-Key': '289a29c09emsh67b645d76a420f4p19e2ffjsn3ff56d782897',
                'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
                    }
            }).then(function(data){
                console.log(data);
                setHotelCode(data)
            })

        }catch(error){
            console.log(error)
        }
        console.log("hotel code")
        console.log(hotelCode)
        let hotelcode = hotelCode
        // get date 
        // get date + 1 week
        // 
        url = 'https://priceline-com-provider.p.rapidapi.com/v1/hotels/search'
        try{
            let response = await axios.get(url, {
                params: {
                    date_checkout: '2023-07-23',
                    sort_order: 'HDR',
                    date_checkin: '2023-07-22',
                    location_id: `${hotelcode}`,
                    star_rating_ids: '3.0,3.5,4.0,4.5,5.0',
                    amenities_ids: 'FINTRNT,FBRKFST',
                    rooms_number: '1'
                  },
                  headers: {
                    'X-RapidAPI-Key': '289a29c09emsh67b645d76a420f4p19e2ffjsn3ff56d782897',
                    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
                  }
            }).then(function(data){
                console.log(data)
                setHotelData(data)
            })
        }catch(error){
            console.log(error)
        }
        console.log("hotels")
        console.log(hotelData)




        //restaurants
        url = 'https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/auto-complete'
        try {
            let response = await axios.get(url, {
                params: {
                    date_checkout: '2023-07-23',
                    sort_order: 'HDR',
                    date_checkin: '2023-07-22',
                    location_id: '3000035821',
                    star_rating_ids: '3.0,3.5,4.0,4.5,5.0',
                    amenities_ids: 'FINTRNT,FBRKFST',
                    rooms_number: '1'
                  },
                  headers: {
                    'X-RapidAPI-Key': '289a29c09emsh67b645d76a420f4p19e2ffjsn3ff56d782897',
                    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
                  }
            }).then(function(data){
                setRestaurantData(data)
                console.log(data)
            })
        }catch(error){
            console.log(error)
        }
        let restaurantsreturn = restaurantData
        console.log(restaurantsreturn)
        console.log("restaurants")
        console.log(restaurantData)

        journeyJunkieData.country.push(countryValue)
        journeyJunkieData.activities.push(activitiesData)
        journeyJunkieData.citycode.push(cityCode)
        journeyJunkieData.flights.push(flightData)
        journeyJunkieData.hotelcode.push(hotelCode)
        journeyJunkieData.hotels.push(hotelData)
        journeyJunkieData.restaurants.push(restaurantData)
        //create one data store and combine 

        setResponseData(journeyJunkieData)
        localStorage.setItem('journeyJunkieData', JSON.stringify(responseData))
        console.log(journeyJunkieData)
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