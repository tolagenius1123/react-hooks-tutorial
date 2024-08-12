import React from "react";
import "./Dashboard.css";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Dashboard = () => {
  const userData = localStorage.getItem("user");
  const convertedUserData = JSON.parse(userData);
  console.log(convertedUserData);
  const { role, email } = convertedUserData;

  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setShowConfirmLogout(true);
  };
  const handleConfirmLogout = () => {
    // Perform logout actions here
    localStorage.removeItem('user'); // Assuming user data is stored in localStorage
    navigate('/login');
    toast.success('Logged out successfully');
    setShowConfirmLogout(false); // Add this line to reset the state
  };

  const handleCancelLogout = () => {
    setShowConfirmLogout(false);
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h1>Logo</h1>
        {role === "ADMIN" ? (
          <div className="links">
            <div className="route">Vendors</div>
            <div className="route">Orders</div>
            <div className="route">Reports</div>
            <div className="route">Settings</div>
            <div className="logout" onClick={handleLogout}>Logout</div>
          </div>
        ) : (
          <div className="links">
            <div className="route">Vendors</div>
            <div className="route">Settings</div>
            <div className="logout" onClick={handleLogout}>Logout</div>
            {showConfirmLogout && (
              <div>
                <p>Are you sure you want to logout?</p>
                <button onClick={handleConfirmLogout}>Yes</button>
                <button onClick={handleCancelLogout}>No</button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="container">
        <div className="header">
          <p>Welcome back, {email}</p>
        </div>
        <div className="content">
          <div className="view">
            {role === "ADMIN" ? (
              <h1>Welcome to the Admin Dashboard</h1>
            ) : (
              <h1>Welcome to the User Dashboard</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;