import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import './App.css';
// API = https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/rockets/all.md
// URL = https://api.spacexdata.com/v4/rockets

interface Rocket {
  name: string;
  flickr_images: string[];
  description: string;
  id?: string;
}

export default function App() {
  const [rockets, setRockets] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedRocket, setSelectedRocket] = useState({
    name: '',
    description: '',
    url: '',
  });

  useEffect(() => {
    getPhotos()
      .then(response => {
        setRockets(response);
      })
      .catch(error => console.log(error));
  }, []);

  const getPhotos = () => {
    const url = 'https://api.spacexdata.com/v4/rockets';
    return fetch(url).then(response => response.json());
  };

  const handleOpen = (rocket: Rocket) => {
    setSelectedRocket({
      name: rocket.name,
      url: rocket.flickr_images[0],
      description: rocket.description,
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <h1>SpaceX-API</h1>
      <h3>Rockets</h3>
      {rockets.map((rocket: Rocket) => {
        return (
          <img
            onClick={() => handleOpen(rocket)}
            className="photo"
            src={rocket.flickr_images[0]}
            alt={rocket.name}
            key={rocket.id}
          />
        );
      })}
      <Modal
        open={open}
        handleClose={handleClose}
        selectedRocket={selectedRocket}
      />
    </div>
  );
}
