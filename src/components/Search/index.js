import "./style.css"
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button'
import { useState } from "react";
import { locationSearch, hotelSearch, restaurantSearch, attractionSearch } from './api'

const Search = () => {
    const [cityValue, setCityValue] = useState("")
    let userSearchData = [];


    const handleUserSearch = query =>{
        console.log("searching...");

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

        const getLocationInfo = location =>{
            hotelSearch(location)
            .then(res => saveToStorage(res, 'hotels'))
            .catch(err => console.log(err))

            restaurantSearch(location)
            .then(res => saveToStorage(res, 'restaurants'))
            .catch(err => console.log(err))

            attractionSearch(location)
            .then(res => saveToStorage(res, 'attractions'))
            .catch(err => console.log(err))
        }

        const saveToStorage = (arr, type) =>{
            let result = {type: type, data: arr.data.data};
            
            userSearchData.push(result);
            localStorage.setItem("userSearch", JSON.stringify(userSearchData));
        }
    }

    return (
        <div className="container-fluid">
            <div className="search-page d-flex  flex-column offset-md-4 mt-5">
                <div className="search-inputs d-flex mt-5 center-block">
                </div>
                <div className="search-inputs d-flex mt-5 ">
                    <div className="input-group mb-3">
                        <input value={cityValue} onChange={e => setCityValue(e.target.value)}
                        type="text" className="form-control" placeholder="Enter city..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button onClick={() =>{handleUserSearch(cityValue)}}className="btn searchButton" type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Search