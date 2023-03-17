import React from "react";
import InfoCard from '../Cards/index';
import { motion } from 'framer-motion';
import './styles.css';
import locationResponse from '../Test Data/location-paris-france.json'
import hotelResponse from '../Test Data/hotel-list-paris-france.json'
import restaurantResponse from '../Test Data/restaurants-paris-france.json'
import attractionResponse from '../Test Data/attractions-paris-france.json'

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
            hotelDataObj["image"] = e.photo.images.original.url;
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

export const Info = () => {

    return(
        <div className="backgroundImg" style={{backgroundImage: `url(${locationInfo.previewImage})`}}>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-1">{locationInfo.city}</h1>
                    <p className="lead">{locationInfo.description}</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container-fluid containerBlur">
                    <h2>Hotels</h2>
                    <div className="container-fluid">
                        <div className="row">
                                {generateHotelDataArray(hotelResponse.data).map(hotel =><InfoCard 
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
                <div className="container-fluid">
                    <h2>Attractions</h2>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container-fluid">
                    <h2>Restaurants</h2>
                </div>
            </div>
        </div>
    );
}