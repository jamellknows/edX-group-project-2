import React, { useState, useContext } from "react";
import HotelCard from '../Cards/HotelCard';
import RestaurantCard from '../Cards/RestaurantCard';
import AttractionCard from '../Cards/AttractionCard';
import { motion } from 'framer-motion';
import './styles.css';
import locationResponse from '../Test Data/location-paris-france.json'
import hotelResponse from '../Test Data/hotel-list-paris-france.json'
import restaurantResponse from '../Test Data/restaurants-paris-france.json'
import attractionResponse from '../Test Data/attractions-paris-france.json'
import { searchDataContext } from "../../context/SearchDataProvider";


const retrieveData = () => {
   

}




let responseInfo = {

}
let locationInfo = {
    city: locationResponse.data[0].result_object.name,
    country: locationResponse.data[0].result_object.ancestors[1].name,
    latitude: locationResponse.data[0].result_object.latitude,
    longitude: locationResponse.data[0].result_object.longitude,
    description: locationResponse.data[0].result_object.geo_description,
    previewImage: locationResponse.data[0].result_object.photo.images.original.url
}

const generateHotelDataArray = arr =>{
    let tempHotelData =[];

    arr.forEach(e =>{
        let hotelDataObj = {};

        if(e.hasOwnProperty('name')){
            hotelDataObj["id"] = e.location_id;
            hotelDataObj["name"] = e.name;
            hotelDataObj["latitude"] = e.latitude;
            hotelDataObj["longitude"] = e.longitude;
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
    
    return (tempHotelData);
}

const generateRestaurantDataArray = arr =>{
    let tempRestaurantData =[];

    arr.forEach(e =>{
        let RestaurantDataObj = {};

        if(e.hasOwnProperty('name')){
            RestaurantDataObj["id"] = e.location_id;
            RestaurantDataObj["name"] = e.name;
            RestaurantDataObj["latitude"] = e.latitude;
            RestaurantDataObj["longitude"] = e.longitude;
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
    
    return (tempRestaurantData);
}

const generateAttractionDataArray = arr =>{
    let tempAttractionData =[];

    arr.forEach(e =>{
        let attractionDataObj = {};

        if(e.hasOwnProperty('name')){
            attractionDataObj["id"] = e.location_id;
            attractionDataObj["name"] = e.name;
            attractionDataObj["latitude"] = e.latitude;
            attractionDataObj["longitude"] = e.longitude;
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
    
    return (tempAttractionData);
}

export const Info = () => {
    const [responseData, setResponseData] = useContext(searchDataContext)
    let infoData = JSON.parse(localStorage.getItem('travelApiData'))
    console.log(infoData.data.data)

    return(
        <div className="backgroundImg">
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
                                {generateHotelDataArray(hotelResponse.data).map(hotel =><HotelCard 
                                    id={hotel.id}
                                    key={`${hotel.name}-${hotel.id}`}
                                    name={hotel.name}
                                    latitude={hotel.latitude}
                                    longitude={hotel.longitude}
                                    image={hotel.image}
                                    rating={hotel.rating}
                                    price={hotel.price}
                                    website={hotel.website}
                                    awardName={hotel.awardname}
                                    awardYear={hotel.awardyear}
                                    awardIcon={hotel.awardicon}/>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container-fluid containerBlur" style={{padding: "10px"}}>
                    <h2>Restaurants</h2>
                    <div className="container-fluid">
                        <div className="d-flex cardContainer">
                            {generateRestaurantDataArray(restaurantResponse.data).map(restaurant =><RestaurantCard
                                id={restaurant.id}
                                key={`${restaurant.name}-${restaurant.id}`}
                                name={restaurant.name}
                                latitude={restaurant.latitude}
                                longitude={restaurant.longitude}
                                image={restaurant.image}
                                description={restaurant.description}
                                rating={restaurant.rating}
                                website={restaurant.website}
                                email={restaurant.email}
                                phone={restaurant.phone}
                                address={restaurant.address}
                                hours={restaurant.hours}/>)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container-fluid containerBlur" style={{padding: "10px"}}>
                    <h2>Attractions</h2>
                    <div className="container-fluid">
                        <div className="d-flex cardContainer">
                            {generateAttractionDataArray(attractionResponse.data).map(attraction =><AttractionCard
                                id={attraction.id}
                                key={`${attraction.name}-${attraction.id}`}
                                name={attraction.name}
                                latitude={attraction.latitude}
                                longitude={attraction.longitude}
                                image={attraction.image}
                                description={attraction.description}
                                rating={attraction.rating}
                                website={attraction.website}
                                address={attraction.address}
                                hours={attraction.hours}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}