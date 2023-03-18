import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavigationBar } from './components/Navigation';
import { Wrapper } from './components/Wrapper';
import  Search    from './components/Search';
import { Info } from './components/Info';
import { Saved } from './components/Saved';
import  Footer  from './components/Footer';
import { Map } from './components/Map';




function App() {

  


  return (
   
    <Router>
    <Wrapper>
    <NavigationBar/>  
      <Routes>
        <Route  path="/search" element={<Search/>}/>
        <Route  path="/info" element={<Info/>}/>
        <Route  path="/saved" element={<Saved/>}/>
        <Route  path="/map" element={<Map/>}/>
      </Routes>
    </Wrapper>
    <Footer/>
    </Router>


  );
}

export default App;
