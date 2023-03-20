import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import starRating from './DisplayRating'
import './styles.css';

const getWebsiteLink = url =>{
    if(url === undefined){
        return;
    }else{
        return <a href={url}>Visit Website</a>
    }
}

const getHotelAward = (awardname, year, icon) =>{
    switch(awardname){
    case undefined: return;
    default: 
        const nameCheck = awardname.includes("Travelers' Choice");
        if(nameCheck === true){
            return(
            <div className="d-flex justify-content-between align-items-center">
            <h3>{awardname}</h3>
            <img className="awardImg" src={icon} alt="award-icon"/>
        </div>);
        }else{
            return(
                <div className="d-flex justify-content-between align-items-center">
                <h3>{awardname} - {year}</h3>
                <img className="awardImg" src={icon} alt="award-icon"/>
            </div>);
        }
    }
}

function HotelCard(props){
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-2" style={{padding: "10px"}}>
            <div className="card" onClick={() => setCardOpen(!cardOpen)}>
                <img src={props.image} alt="placeholder-image" className="card-img-top"/>
                <div className="card-body">
                    <h2 className="card-title">{props.name}</h2>
                    <hr className="my-2"/>
                    {starRating(props.rating)}
                    <hr className="my-2"/>
                    {cardOpen && (
                    <div className="infoContainer">
                        {getHotelAward(props.awardName, props.awardYear, props.awardIcon)}
                        <p>Rooms from {props.price}</p>
                        <div className="mapArea">Map goes here</div>
                        <div className="buttonGroup">
                            {getWebsiteLink(props.website)}
                            <button>Save</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HotelCard;