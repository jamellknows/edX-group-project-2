import "./style.css"
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button'
import { useState } from "react";
import { locationSearch, hotelSearch, restaurantSearch, attractionSearch } from './api'
import LoadingIcon from "./LoadingIcon";

const Search = () => {
    const [cityValue, setCityValue] = useState("");
    const [isLoading, setLoading] = useState(false);
    let userSearchData = [];

    const apiQuery = query =>{
        console.log("searching...");
        setLoading(!isLoading);

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
                </div>
            </div>
            {isLoading &&(<LoadingIcon/>)}
        </div>
    </div>
    );
}

export default Search