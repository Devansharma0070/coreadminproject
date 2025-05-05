import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [lastLogin, setLastLogin] = useState<string | null>(null);
  localStorage.setItem('lastLogin', new Date().toLocaleString());

  useEffect(() => {
    const savedLoginDate = localStorage.getItem('lastLogin');
    setLastLogin(savedLoginDate || 'Never logged in');
  }, []);

  const logout = () => {
    navigate('/');
  };

  return (
    <header>
      <Card id='headercard'>
        <img id='granite' src='src/Images/logo.png' alt="Logo" />
        <b>
          <p id='login'>
            Welcome Devansh|
            <button 
              style={{
                backgroundColor: "white",
                border: "none",
                outline: "none",
                boxShadow: "none",
              }} 
              id="logoutButton" 
              onClick={logout}
            >
              LOGOUT
            </button>
            <p style={{ fontSize: 'small', position:"absolute", top:20 }}>
              Last login:  {lastLogin}
            </p>
          </p>
        </b>
        <i id='icon' className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem' }}>
          <Badge value="5"></Badge>
        </i>
      </Card>
    </header>
  );
};

export default Header;
