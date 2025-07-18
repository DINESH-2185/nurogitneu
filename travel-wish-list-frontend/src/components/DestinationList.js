import React from "react";
import { destinations } from '../data/destinations';

const DestinationList = () => {
  return (
    <div>
      <h2>Destinations</h2>
      <div className="grid">
        {destinations.map((dest) => (
          <div className="card" key={dest.id}>
            <img src={dest.image} alt={dest.name} />
            <h3>{dest.name}</h3>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationList;
