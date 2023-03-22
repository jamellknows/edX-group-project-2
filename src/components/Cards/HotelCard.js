import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import starRating from './DisplayRating'
import Map from '../Map/index'
import './styles.css';

const getWebsiteLink = url =>{
    if(url === undefined){
        return;
    }else{
        return <motion.a href={url} whileHover={{scale: 1.1}}>Visit Website</motion.a>
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

const getPageSpecificStyle = page =>{
    switch(page){
        case 'info': return {height: "20vh"};
        case 'saved': return {height: "5vh"};
    }
}

const getPageSpecificButton = page=>{
    switch(page){
        case 'info': return 'Save';
        case 'saved': return 'Delete';
    }
}

function HotelCard(props){
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <motion.div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2 d-flex align-self-stretch" style={{padding: "10px"}}
        initial={{scale: 0.5, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{type: 'spring', bounce: 0.5, duration: 1}}>
            <motion.div className="card flex-grow-1"
            layout transistion={{layout: {duration: 1}}}
            whileHover={{boxShadow: "0px 0px 12px rgb(255,255,255)"}}>
                <motion.img onClick={() => setCardOpen(!cardOpen)}
                layout="posistion" src={props.image} alt="placeholder-image" className="card-img-top" style={getPageSpecificStyle(props.pageStyle)}/>
                <motion.div layout="posistion" className="card-body">
                    <motion.h2 layout="posistion" className="card-title">{props.name}</motion.h2>
                    <motion.hr layout="posistion" className="my-2"/>
                    <motion.div layout="posistion">{starRating(props.rating)}</motion.div>
                    <motion.hr layout="posistion" className="my-2"/>
                    {!cardOpen && (
                        <motion.p className="cardinfo" >Click image for more info</motion.p>
                    )}
                    <AnimatePresence>
                        {cardOpen && (
                        <motion.div className="infoContainer" key={`${props.id}-${cardOpen}`}
                        initial={{y: -100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: -100, opacity: 0}}
                        transition={{ duration: 0.5}}>
                            {getHotelAward(props.awardName, props.awardYear, props.awardIcon)}
                            <motion.p >Rooms from {props.price}</motion.p>
                            <motion.div className="mapArea">
                                <Map coords={props.coords} />
                            </motion.div>
                            <motion.div className="buttonGroup">
                                {getWebsiteLink(props.website)}
                                <motion.button onClick={props.saveModal}
                                whileHover={{scale: 1.1}}>{getPageSpecificButton(props.pageStyle)}</motion.button>
                            </motion.div>
                        </motion.div>)}
                        </AnimatePresence>
                </motion.div>
            </motion.div>
        </motion.div>
        
    );
}

export default HotelCard;