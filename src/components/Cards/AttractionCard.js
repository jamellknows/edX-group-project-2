import React, { useState } from 'react';
import starRating from './DisplayRating'
import { motion, AnimatePresence } from 'framer-motion';
import './styles.css';
import Map from '../Map/index'

const getWebsiteLink = url =>{
    if(url === undefined){
        return;
    }else{
        return <motion.a href={url} whileHover={{scale: 1.1}}>Visit Website</motion.a>
    }
}

function AttractionCard(props){
    const [cardOpen, setCardOpen] = useState(false);

    return (
        <motion.div className="col-sm-12 col-md-12 col-lg-4 col-xl-2" style={{padding: "10px"}}
        initial={{scale: 0.5, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{type: 'spring', bounce: 0.5, duration: 1}}>
            <motion.div className="card" onClick={() => setCardOpen(!cardOpen)}
            layout transistion={{layout: {duration: 1}}}
            whileHover={{boxShadow: "0px 0px 12px rgb(255,255,255)"}}>
                <motion.img layout="posistion" src={props.image} alt="placeholder-image" className="card-img-top"/>
                <motion.div layout="posistion" className="card-body">
                    <motion.h2 layout="posistion" className="card-title">{props.name}</motion.h2>
                    <motion.hr layout="posistion" className="my-2"/>
                    <motion.div layout="posistion">{starRating(props.rating)}</motion.div>
                    <motion.hr layout="posistion" className="my-2"/>
                    <AnimatePresence>
                        {cardOpen && (
                        <motion.div className="infoContainer"
                        initial={{y: -100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: -100, opacity: 0}}
                        transition={{ duration: 0.5}}>
                            <motion.p>{props.description}</motion.p>
                            <motion.div className="mapArea"><Map/></motion.div>
                            <motion.h3>Address: {props.address}</motion.h3>
                            <motion.div className="buttonGroup">
                                {getWebsiteLink(props.website)}
                                <motion.button
                                whileHover={{scale: 1.1}}>Save</motion.button>
                            </motion.div>
                        </motion.div>)}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default AttractionCard;