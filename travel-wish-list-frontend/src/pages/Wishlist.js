import React, { useState } from 'react';

const initialWishlist = [
  {
    id: 1,
    name: 'Paris',
    country: 'France',
    category: 'Romantic',
    tips: 'Visit Eiffel Tower at night',
    budget: 'Rs.70,000',
  },
  {
    id: 2,
    name: 'Kyoto',
    country: 'Japan',
    category: 'Cultural',
    tips: 'Try traditional ryokan stays',
    budget: 'Rs.90,000',
  },
];

function Wishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleRemove = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="wishlist-container">
      <h2>My Travel Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.map(item => (
          <div key={item.id} className="wishlist-card">
            <h3>{item.name}</h3>
            <p><strong>Country:</strong> {item.country}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Tips:</strong> {item.tips}</p>
            <p><strong>Budget:</strong> {item.budget}</p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
