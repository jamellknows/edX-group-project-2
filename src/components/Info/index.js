import React, { useState } from "react";
import HotelCard from '../Cards/HotelCard';
import RestaurantCard from '../Cards/RestaurantCard';
import AttractionCard from '../Cards/AttractionCard';
import { motion } from 'framer-motion';
import './styles.css';
// import locationResponse from '../Test Data/location-paris-france.json'
// import hotelResponse from '../Test Data/hotel-list-paris-france.json'
// import restaurantResponse from '../Test Data/restaurants-paris-france.json'
// import attractionResponse from '../Test Data/attractions-paris-france.json'

const savedJourneys = JSON.parse(localStorage.getItem('savedJourneys')) || []; //Loads saved items from local storage
const userSearchData = JSON.parse(localStorage.getItem('userSearch')) || [];
let saveItemId = [];

const getSearchItem = (arr, type) =>{
    let search ={};

    switch(type){
        case 'hotels':
            search = arr.find(e => e.type === 'hotels');
            return (search);
        case 'restaurants':
            search = arr.find(e => e.type === 'restaurants');
            return (search);
        case 'attractions':
            search = arr.find(e => e.type === 'attractions');
            return (search);
        default: return;
    }
}

let locationResponse = userSearchData[0];
let hotelResponse = getSearchItem(userSearchData, 'hotels');
let restaurantResponse = getSearchItem(userSearchData, 'restaurants');
let attractionResponse = getSearchItem(userSearchData, 'attractions');

let hotelData = []; //Array for hotel data
let restaurantData = []; //Array for restaurant data
let attractionData = []; //Array for attraction data
let locationInfo = {};

if(locationResponse === undefined || locationResponse === []){
    locationInfo = {
        city: 'No City Found',
        description: 'Please search a city first'
    }
}else{
    locationInfo = { //Parse user search response to get location information
        city: locationResponse[0].result_object.name,
        country: locationResponse[0].result_object.name,
        latitude: locationResponse[0].result_object.latitude,
        longitude: locationResponse[0].result_object.longitude,
        description: locationResponse[0].result_object.geo_description,
        previewImage: locationResponse[0].result_object.photo.images.original.url
    }
}

const validateSearch = (arr, type) =>{
    const noDataFound = [{name:'No Data'}];
    switch(type){
        case 'hotel':
            if(arr === undefined || arr === []){
                return noDataFound;
            }else{
                return (generateHotelDataArray(arr));
            }
        case 'restaurant':
            if(arr === undefined || arr === []){
                return noDataFound;
            }else{
                return (generateRestaurantDataArray(arr));
            }
 
        case 'attraction':
            if(arr === undefined || arr === []){
                return noDataFound;
            }else{
                return (generateAttractionDataArray(arr));
                }
    }
    
}

const generateHotelDataArray = arr =>{ //Function to populate hotel data array
    let tempHotelData =[];

    arr.forEach(e =>{
        let hotelDataObj = {};

        if(e.hasOwnProperty('name')){
            hotelDataObj["id"] = e.location_id;
            hotelDataObj["name"] = e.name;
            hotelDataObj["type"] = 'hotel';
            hotelDataObj["coords"] = [e.latitude, e.longitude];
            hotelDataObj["image"] = e.photo.images.large.url;
            hotelDataObj["rating"] = e.rating;
            hotelDataObj["price"] = e.price;
            hotelDataObj["website"] = e.business_listings?.mobile_contacts[0]?.value;
            hotelDataObj["awardname"] = e.awards[0]?.display_name;
            hotelDataObj["awardyear"] = e.awards[0]?.year;
            hotelDataObj["awardicon"] = e.awards[0]?.images.small;

            tempHotelData.push(hotelDataObj);
        }else{
            return;
        }
    })
    
    hotelData = tempHotelData;
    return hotelData;
}

const generateRestaurantDataArray = arr =>{ //Function to populate restaurant data array
    let tempRestaurantData =[];

    arr.forEach(e =>{
        let RestaurantDataObj = {};

        if(e.hasOwnProperty('name')){
            RestaurantDataObj["id"] = e.location_id;
            RestaurantDataObj["name"] = e.name;
            RestaurantDataObj["type"] = 'restaurant';
            RestaurantDataObj["coords"] = [e.latitude, e.longitude];
            RestaurantDataObj["image"] = e.photo.images.large.url;
            RestaurantDataObj["description"] = e.description;
            RestaurantDataObj["rating"] = e.rating;
            RestaurantDataObj["website"] = e.website;
            RestaurantDataObj["email"] = e.email;
            RestaurantDataObj["phone"] = e.phone;
            RestaurantDataObj["address"] = e.address;
            RestaurantDataObj["hours"] = e.hours.week_ranges;

            tempRestaurantData.push(RestaurantDataObj);
        }else{
            return;
        }
    })
    
    restaurantData = tempRestaurantData;
    return restaurantData;
}

const generateAttractionDataArray = arr =>{ //Function to populate attraction data array
    let tempAttractionData =[];

    arr.forEach(e =>{
        let attractionDataObj = {};

        if(e.hasOwnProperty('name')){
            attractionDataObj["id"] = e.location_id;
            attractionDataObj["name"] = e.name;
            attractionDataObj["type"] = 'attraction';
            attractionDataObj["coords"] = [e.latitude, e.longitude];
            attractionDataObj["image"] = e.photo.images.large.url;
            attractionDataObj["rating"] = e.rating;
            attractionDataObj["description"] = e.description;
            attractionDataObj["website"] = e.website;
            attractionDataObj["address"] = e.address;
            attractionDataObj["hours"] = e.hours?.week_ranges;

            tempAttractionData.push(attractionDataObj);
        }else{
            return;
        }
    })
    
    attractionData = tempAttractionData;
    return attractionData;
}

const getSavedJourneys = (savedJourneys) =>{ //function to check if user has any saved journeys and to return them if true
    if(savedJourneys === undefined || savedJourneys.length === 0){
        console.log("No saved journeys");
        return (<p>No saved journeys</p>);
    }else{
        console.log("nothing");
    }
}

export const Info = () => {
    const [modalOpen, setModalOpen] = useState(false); //Toggle display of save modal
    const [journeyName, setJourneyName] = useState(""); //Get user input for journey name

    const saveModal = (id, type) =>{ //Gets id and type of selected item to be saved
        saveItemId = [id, type];
        setModalOpen(!modalOpen);
    }

    const saveItem = (item, name) =>{ //Function to save items to user journey
        console.log(item);
        let checkExistingJourney = savedJourneys.find(journey => journey.title === name); //Checks if journey already exists in local storage
        
        const addItem = (item, journeyObj) =>{ //Adds selected item to journey
            switch(item[1]){
                case 'hotel':
                    let tempHotel = hotelData.find(hotel => hotel.id === item[0]);
                    journeyObj.items.push(tempHotel);
                    break;
                case 'restaurant':
                    let tempRestaurant= restaurantData.find(restaurant => restaurant.id === item[0]);
                    journeyObj.items.push(tempRestaurant);
                    break;
                case 'attraction':
                    let tempAttraction = attractionData.find(attraction => attraction.id === item[0]);
                    journeyObj.items.push(tempAttraction);
                    break;
                default:
                    return;
            }

            return journeyObj;
        }
    
        if (checkExistingJourney === undefined){ //If journey doesn't exist in local storage, one is created
            let newSavedJourney = {title: name, items: []};
            savedJourneys.push(addItem(item, newSavedJourney));
        }else{
            console.log(`${checkExistingJourney.title} already exists`); //If it does exist it is updated with new item

            let journeyIndex = savedJourneys.map(e => { return e.title; }).indexOf(name);
            savedJourneys[journeyIndex] = addItem(item, checkExistingJourney);
        }
    
        localStorage.setItem("savedJourneys", JSON.stringify(savedJourneys));
        setModalOpen(!modalOpen);
        saveItemId = [];
    }

    return(
        <div className="hero" style={{
            backgroundImage: `url(${locationInfo.previewImage})`, 
            backgroundSize: "cover", 
            backgroundAttachment: "fixed"}}>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-1">{locationInfo.city}</h1>
                    <p className="lead">{locationInfo.description}</p>
                </div>
            </div>
            <div className="container-fluid m-auto mainCards">
                <div className="container-fluid containerBlur" style={{padding: "10px"}}>
                    <h2>Hotels</h2>
                    <div className="container-fluid">
                        <div className="d-flex cardContainer">
                                {validateSearch(hotelResponse?.data, 'hotel').map(hotel =><HotelCard 
                                    id={hotel.id}
                                    key={`${hotel.name}-${hotel.id}`}
                                    name={hotel.name}
                                    coords={hotel.coords}
                                    image={hotel.image}
                                    rating={hotel.rating}
                                    price={hotel.price}
                                    website={hotel.website}
                                    awardName={hotel.awardname}
                                    awardYear={hotel.awardyear}
                                    awardIcon={hotel.awardicon}
                                    saveModal={() =>saveModal(hotel.id, "hotel")}
                                    pageStyle='info'/>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container-fluid containerBlur" style={{padding: "10px"}}>
                    <h2>Restaurants</h2>
                    <div className="container-fluid">
                        <div className="d-flex cardContainer">
                            {validateSearch(restaurantResponse?.data, 'restaurant').map(restaurant =><RestaurantCard
                                id={restaurant.id}
                                key={`${restaurant.name}-${restaurant.id}`}
                                type="restaurant"
                                name={restaurant.name}
                                coords={restaurant.coords}
                                image={restaurant.image}
                                description={restaurant.description}
                                rating={restaurant.rating}
                                website={restaurant.website}
                                email={restaurant.email}
                                phone={restaurant.phone}
                                address={restaurant.address}
                                hours={restaurant.hours}
                                saveModal={() =>saveModal(restaurant.id, "restaurant")}
                                pageStyle='info'/>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container-fluid containerBlur" style={{padding: "10px"}}>
                    <h2>Attractions</h2>
                    <div className="container-fluid">
                        <div className="d-flex cardContainer">
                            {validateSearch(attractionResponse?.data, 'attraction').map(attraction =><AttractionCard
                                id={attraction.id}
                                key={`${attraction.name}-${attraction.id}`}
                                type="attraction"
                                name={attraction.name}
                                coords={attraction.coords}
                                image={attraction.image}
                                description={attraction.description}
                                rating={attraction.rating}
                                website={attraction.website}
                                address={attraction.address}
                                hours={attraction.hours}
                                saveModal={() =>saveModal(attraction.id, "attraction")}
                                pageStyle='info'/>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container-fluid containerBlur" style={{padding: "10px"}}></div>
            </div>
            {modalOpen && (
                <div className="saveModal containerBlur">
                    <div className="d-flex justify-content-between">
                        <h2 style={{alignSelf: "center"}}>Save Item</h2>
                        <button onClick={() =>{setModalOpen(!modalOpen)}}className="closeButton">X</button>
                    </div>
                    <p>Please select or create a journey to save to</p>
                    <div className="savedJourneys">
                        {getSavedJourneys(savedJourneys)}
                    </div>
                    <div className="input-group mb-3">
                        <input value={journeyName} onChange={e => setJourneyName(e.target.value)}
                        type="text" className="form-control" placeholder="Enter journey name..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button onClick={() => {saveItem(saveItemId, journeyName)}} className="btn btn-outline-secondary" type="button">Save</button>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}