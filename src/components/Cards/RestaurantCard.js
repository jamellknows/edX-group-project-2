import React, { useState } from 'react';
import starRating from './DisplayRating'
import { motion } from 'framer-motion';
import './styles.css';

const getWebsiteLink = url =>{
    if(url === undefined){
        return;
    }else{
        return <a href={url}>Visit Website</a>
    }
}

function RestaurantCard(props){
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-2" style={{padding: "10px"}}>
            <div className="card" onClick={() => setCardOpen(!cardOpen)}>
                <img src={props.image} alt="placeholder" className="card-img-top"/>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <hr className="my-2"/>
                    {starRating(props.rating)}
                    <hr className="my-2"/>
                    {cardOpen && (
                    <div className="infoContainer">
                        <p>{props.description}</p>
                        <div className="mapArea">Map goes here</div>
                        <h3>Address: {props.address}</h3>
                        <h3>Phone: {props.phone}</h3>
                        <h3>Email: {props.email}</h3>
                        <div className="buttonGroup">
                            {getWebsiteLink(props.website)}
                            <button>Save</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;