import { useState, useEffect } from 'react';
import HotelCard from '../Cards/HotelCard';
import RestaurantCard from '../Cards/RestaurantCard';
import AttractionCard from '../Cards/AttractionCard';
import './styles.css';

const savedJourneys = JSON.parse(localStorage.getItem('savedJourneys')) || [];


function Saved(props) {
  const [journeys, setJourneys] = useState(savedJourneys);

  // useEffect(() => {
  //   const savedTrips = JSON.parse(localStorage.getItem('savedTrips')) || [];

  //   setTrips(savedTrips.filter(trip => trip.user === currentUser));
  // }, [currentUser]);

  // const handleDeleteTrip = (tripId) => {
  //   const updatedTrips = trips.filter(trip => trip.id !== tripId);
  //   setTrips(updatedTrips);
  //   localStorage.setItem('savedTrips', JSON.stringify(updatedTrips));
  // };
  const getCardType = (arr, type) =>{
    return (arr.filter(item => item.type === type));
  }

  return (
    <div>
      <div className="container-fluid m-auto">
      <h1>Your Saved Journeys</h1>
        {savedJourneys.map(journey => <div className="container-fluid containerBlur" style={{padding: "10px"}}>
          <h2>{journey.title}</h2>
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
                awardIcon={hotel.awardicon}/>)}
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
                hours={restaurant.hours}/>)}
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
                hours={attraction.hours}/>)}
              </div>
            </div>
        </div>)}
      </div>
      {/* <h1>Your Saved Trips</h1>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h2>{trip.title}</h2>
            <p>{trip.description}</p>
            <button onClick={() => handleDeleteTrip(trip.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Saved;