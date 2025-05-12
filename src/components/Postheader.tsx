import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Badge } from 'primereact/badge';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [lastLogin, setLastLogin] = useState<string | null>(null);

  useEffect(() => {
    const savedLoginDate = localStorage.getItem('lastLogin');
    setLastLogin(savedLoginDate || 'Never logged in');
  }, []);

  const logout = () => {
    localStorage.setItem('lastLogin', new Date().toLocaleString());
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
                marginRight: "11px",
                boxShadow: "none",
                transition: "all 0.3s ease",
                color: " #1f7ef2",
                fontFamily: "unset",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
              id="logoutButton"
              onClick={logout}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0px 4px 8px rgb(92, 146, 177)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              LOGOUT
            </button>
            <p style={{ fontSize: 'small', position: "absolute", top: 20 }}>
              Last login:  {lastLogin}
            </p>
          </p>
        </b>
        <div ><i id='icon' className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem', }}>
          <Badge style={{ backgroundColor: "red" }} value="5"></Badge>
        </i></div>

      </Card>
    </header>
  );
};

export default Header;
