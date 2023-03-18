import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavigationBar } from './components/Navigation';
import { Wrapper } from './components/Wrapper';
import  Search    from './components/Search';
import { Info } from './components/Info';
import { Saved } from './components/Saved';
import  Footer  from './components/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'



function App() {

  const position = [52.51, 13.38];


  return (
   
    <Router>
    <Wrapper>
    <NavigationBar/>  
      <Routes>
        <Route  path="/search" element={<Search/>}/>
        <Route  path="/info" element={<Info/>}/>
        <Route  path="/saved" element={<Saved/>}/>
      </Routes>
      <div className="map">
  <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        🐻🍻🎉
      </Popup>
    </Marker>
  </MapContainer>
</div>
    </Wrapper>
    <Footer/>
    </Router>


  );
}

export default App;
