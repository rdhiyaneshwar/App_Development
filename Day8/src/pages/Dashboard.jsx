import React from 'react';
import '../assets/css/Dashboard.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from './Navbar';
import { useSelector, useDispatch } from 'react-redux'
import Footer from './Footer';

const Dashboard = () => {
    const user = useSelector(state => state.auth.user);
  return (
    <>
      <Navigation />
      <div className='bodydash'>
      <div className="dashboard">
      <div className="dashboard-container">
        <header className="header">
          <h1 className='mag'>Dashboard</h1>
          <button className="button-29"><Link to="/">Logout</Link></button>
        </header>
        <main className="main-content">
          <div className="sidebar">
            <ul className="nav-menu">
              <li className="nav-item"><Link to="/Home">Home</Link></li>
              <li className="nav-item">Analytics</li>
              <li className="nav-item">Settings</li>
            </ul>
          </div>
          <div className="content">
            <div className="cardj">
              <h2>WELCOME {user.username}</h2>
              <p> "Welcome to our Elderly Home, where every day is a new chapter filled with warmth and care."In our Elderly Home, we embrace the wisdom of age and the beauty of each new beginning.</p>
            </div>
            <div className='cardcontainer'>
            <div className="cardm">
              <h2>ELDERLY INDIVIDUAL</h2>
              <p>YOU ARE OUR EVERYTHING</p>
            </div>
            <div className="cardm">
              <h2>FAMILY</h2>
              <p>ALWAYS THERE WHEN YOU NEED US THE MOST</p>
            </div>
            <div className="cardm">
              <h2>CARE TAKER</h2>
              <p>WE ARE YOUR HELPING HAND</p>
            </div>
          </div>
          </div>
        </main>
      </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};
export default Dashboard;