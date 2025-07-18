import React from 'react';

function Logout({ onLogout }) {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="logout-container">
      <h2>You are logged in</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
