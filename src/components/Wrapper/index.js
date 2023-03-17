import './style.css'
import { useState, useEffect } from 'react'
import background1 from '../../assets/background1.jpg'
import background2 from '../../assets/background2.jpg'
import background3 from '../../assets/background3.jpg'
import background4 from '../../assets/background4.jpg'
import background5 from '../../assets/background5.jpg'


export const Wrapper = (props) => {

    const backgrounds = [
        background1, 
        background2, 
        background3, 
        background4, 
        background5
    ]


    const [background, setBackground] = useState(backgrounds[0]);
    // const path = "../../assets/background"
  
    var i = 0;
    const changeBackground = ()=> {
        i = (i >= 4) ?  0 : i+1; 
        console.log(i)
        console.log(background)
        setBackground(backgrounds[i])
        
    }

    let backgroundStyles = {
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
        width: "100.5vw",
        height: "100%",
        zIndex: "-999"
    }

    console.log(backgrounds)

    useEffect(() => {
        const interval = setInterval(()=>{
            changeBackground()
        }, 7000)
        return() => clearInterval(interval)
    },[])


    return(
        <div className="container-fluid wrapper">
            <div id="background" className="container-fluid" style={backgroundStyles}>
            {props.children}
            </div>
        </div>
    )
}