import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { NavigationBar } from './components/Navigation';
import { Wrapper } from './components/Wrapper';
import  Search  from './components/Search';
import { Info } from './components/Info';
import { Saved } from './components/Saved';
function App() {
  return (
    
    <Router>
     <Wrapper>

     <NavigationBar/>  
      <Routes>
      <Route  path="/search" element={<Search/>}/>
      <Route  path="/info" element={<Info/>}/>
      <Route  path="/saved" element={<Saved/>}/>
      </Routes>

    </Wrapper>
    </Router>


  );
}

export default App;
