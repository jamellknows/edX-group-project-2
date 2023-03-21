import { useState, useEffect } from 'react';
import axios from 'axios';

function Saved(props) {
  const { currentUser } = props;
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const savedTrips = JSON.parse(localStorage.getItem('savedTrips')) || [];

    setTrips(savedTrips.filter(trip => trip.user === currentUser));
  }, [currentUser]);

  const handleDeleteTrip = (tripId) => {
    const updatedTrips = trips.filter(trip => trip.id !== tripId);
    setTrips(updatedTrips);
    localStorage.setItem('savedTrips', JSON.stringify(updatedTrips));
  };

  return (
    <div>
      <h1>Your Saved Trips</h1>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            <h2>{trip.title}</h2>
            <p>{trip.description}</p>
            <button onClick={() => handleDeleteTrip(trip.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Saved;