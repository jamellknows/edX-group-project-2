import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SearchDataProvider from './context/SearchDataProvider';
import { NavigationBar } from './components/Navigation';
import { Wrapper } from './components/Wrapper';
import routes from "./utils/routes";
import RouteWithSubRoutes from "./utils/RouteWithSubRoutes";
import  Footer  from './components/Footer';





function App() {

  return (
   
    <Router>
    <Wrapper>
    <NavigationBar/>  
      
        <SearchDataProvider>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.key} {...route}/>
          ))}
        </SearchDataProvider>
      
    </Wrapper>
    <Footer/>
    </Router>

  );
}

export default App;