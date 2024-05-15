import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({});

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowForm(true);
  };

  const handleFormSubmit = (data) => {
    setPersonalDetails(data);
    setShowForm(false);
    alert('Your details are saved successfully!');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-2 py-24">
        {!isLoggedIn && <Login onLogin={handleLogin} />}
        {showForm && <PersonalDetailsForm onSubmit={handleFormSubmit} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
