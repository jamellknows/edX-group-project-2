import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion';
import HotelCard from '../Cards/HotelCard';
import RestaurantCard from '../Cards/RestaurantCard';
import AttractionCard from '../Cards/AttractionCard';
import './styles.css';

const savedJourneys = JSON.parse(localStorage.getItem('savedJourneys')) || [];
let tempJourneyTitle = '';

function Saved(props) {
  const [journeys, setJourneys] = useState(savedJourneys);
  const [modalOpen, setModalOpen] = useState(false);

  const getCardType = (arr, type) =>{
    return (arr.filter(item => item.type === type));
  }

  const deleteCard = (id) =>{
    return;
  }

  const deleteModal = (journey) =>{
    tempJourneyTitle = journey;
    console.log(tempJourneyTitle);
    setModalOpen(!modalOpen);
  }

  const deleteJourney = async journey =>{
    const newJourneys = [];
    try {
      for (let i = 0; i < journeys.length; i++){
        if(journeys[i].title !== journey){
          newJourneys.push(journeys[i]);
        }
      }
      console.log(`Deleting ${journey}`);
      localStorage.setItem('savedJourneys', JSON.stringify(newJourneys));
      setModalOpen(!modalOpen);
      setJourneys(newJourneys);
    } finally{
      refreshJourneys();
    }
  }

  const refreshJourneys = () =>{
    window.location.reload();
  }

  return (
    <div>
      <div className="container-fluid m-auto">
      <div className="d-flex justify-content-between">
        <h1>Your Saved Journeys</h1>
        <motion.button onClick={() =>{refreshJourneys()}} whileHover={{scale: 1.1}}
        className="button" style={{width: "200px"}}>Refresh Journeys</motion.button>
      </div>
        {journeys.map(journey => <div className="container-fluid containerBlur" style={{padding: "10px"}}>
          <div className="journeyHeader"> 
            <h2>{journey.title}</h2>
            <motion.button onClick={() =>{deleteModal(journey.title)}} whileHover={{scale: 1.1}}>Delete Journey</motion.button>
          </div>
            <div className="container-fluid">
              <h3>Hotels</h3>
              <div className="d-flex cardContainer">
                {getCardType(journey.items, 'hotel').map(hotel =><HotelCard 
                id={hotel.id}
                key={`${hotel.name}-${hotel.id}`}
                name={hotel.name}
                coords={hotel.coords}
                image={hotel.image}
                rating={hotel.rating}
                price={hotel.price}
                website={hotel.website}
                awardName={hotel.awardname}
                awardYear={hotel.awardyear}
                awardIcon={hotel.awardicon}
                pageStyle='saved'/>)}
              </div>
              <h3>Restaurants</h3>
              <div className="d-flex cardContainer">
                {getCardType(journey.items, 'restaurant').map(restaurant =><RestaurantCard
                id={restaurant.id}
                key={`${restaurant.name}-${restaurant.id}`}
                type="restaurant"
                name={restaurant.name}
                coords={restaurant.coords}
                image={restaurant.image}
                description={restaurant.description}
                rating={restaurant.rating}
                website={restaurant.website}
                email={restaurant.email}
                phone={restaurant.phone}
                address={restaurant.address}
                hours={restaurant.hours}
                pageStyle='saved'/>)}
              </div>
              <h3>Attractions</h3>
              <div className="d-flex cardContainer">
                {getCardType(journey.items, 'attraction').map(attraction =><AttractionCard
                id={attraction.id}
                key={`${attraction.name}-${attraction.id}`}
                type="attraction"
                name={attraction.name}
                coords={attraction.coords}
                image={attraction.image}
                description={attraction.description}
                rating={attraction.rating}
                website={attraction.website}
                address={attraction.address}
                hours={attraction.hours}
                pageStyle='saved'/>)}
              </div>
            </div>
        </div>)}
      </div>
      {modalOpen && (
      <div className="saveModal containerBlur">
          <h2 style={{alignSelf: "center"}}>Delete Journey</h2>
          <p>Are you sure you want to delete {`${tempJourneyTitle} ?`}</p>
          <div className="d-flex justify-content-around">
            <button onClick={() => {deleteJourney(tempJourneyTitle)}}
             className="btn btn-outline-secondary" type="button">Yes</button>
             <button onClick={() => {setModalOpen(!modalOpen);}}
             className="btn btn-outline-secondary" type="button">No</button>
          </div>
      </div>)}
    </div>
  );
}

export default Saved;