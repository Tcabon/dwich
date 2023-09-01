import React from 'react';
import { Link } from 'react-router-dom';

function Restaurant({ id, name, description, selectedDate }) {
  return (
    <div>
      <h2>
        <Link to={`/menu/${id}?date=${selectedDate.toISOString()}`}>
          {name}
        </Link>
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default Restaurant;