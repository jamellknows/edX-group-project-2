import { useState, useEffect } from 'react';
import axios from 'axios';

function SavedTrips(props) {
  const { currentUser } = props;
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      axios.get('/api/saved-trips')
        .then(response => {
          setTrips(response.data.filter(trip => trip.user === savedUser));
        })
        .catch(error => console.log(error));
    }
  }, []);

  const handleDeleteTrip = (tripId) => {
    axios.delete(`/api/saved-trips/${tripId}`)
      .then(response => {
        setTrips(trips.filter(trip => trip.id !== tripId));
      })
      .catch(error => console.log(error));
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

export default SavedTrips;