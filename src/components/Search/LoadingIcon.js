import React from 'react';
import { motion } from 'framer-motion';

const loadingIcon = {
    display: "block",
    width: "3rem",
    height: "3rem",
    border: "0.5rem solid #e9e9e9",
    borderTop: "0.5rem solid #00A6A6",
    borderRadius: "50%",
    position: "absolute",
    boxSizing: "border-box",
    top: "40%"
};

const transistion = {
    repeat: Infinity,
    duration: 0.8,
    ease: "linear"
};

export default function LoadingIcon() {
    return(
        <motion.span 
        style={loadingIcon}
        animate={{rotate: 360}}
        transition={transistion}/>
    )
}