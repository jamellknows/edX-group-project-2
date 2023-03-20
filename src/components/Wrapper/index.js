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
    
    var backgroundIndex = 0;
    const changeBackground = ()=> {
        backgroundIndex = (backgroundIndex >= 4) ?  0 : backgroundIndex+1; 
        setBackground(backgrounds[backgroundIndex])
        
    }
    
    useEffect(() => {
      const interval = setInterval(()=>{
          changeBackground()
      }, 7000)
      return() => clearInterval(interval)
    },[])


    let backgroundStyles = {
        backgroundSize: "cover",
        backgroundImage: `url(${background})`,
        width: "100%",
        height: "100%",
        zIndex: "-999"
    }

    return(
        <div className="container-fluid wrapper">
            <div id="background" className="container-fluid" style={backgroundStyles}>
            {props.children}
            </div>
        </div>
    )
}