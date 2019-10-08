import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  /* Quando um array vazio é passado como segundo parametro, significa que vai carregar apenas uma vez */
  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem('user');
      console.log(user_id);
      const response = await api.get('/dashboard', {
        headers: { user_id }
      });

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  return (
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <span>{spot.price ? `RS ${spot.price}/dia` : `Gratuito`}</span>
          </li>
        ))}
      </ul>
    </>
  )
}