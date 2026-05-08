import React, { useState } from 'react';

const App = () => {
  const [user, setUser] = useState({
    name: 'John Probus',
    role: 'Frontend Developer',
    isOnline: false,
  });

  const handleToggleStatus = () => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        isOnline: !prevUser.isOnline,
      };
    });
  };

  return (
    <main className="page">
      <section className="status-card">
        <p className="eyebrow">React State Exercises</p>
        <h1>{user.name}</h1>
        <p className="role">{user.role}</p>

        <p className="status-text">
          Status: {user.isOnline ? 'Online' : 'Offline'}
        </p>

        <button onClick={handleToggleStatus} className="toggle-button">Toggle Status</button>
      </section>
    </main>
  );
};

export default App;
