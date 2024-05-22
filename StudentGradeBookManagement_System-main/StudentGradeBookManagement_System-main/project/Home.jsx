// Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Home.css'; // Import the CSS file for styling

const profilePictures = {
  admin: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKC2u1xrmlYviutXR9p-IM-AYHr-Se-viOg&usqp=CAU',
  user: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcKC2u1xrmlYviutXR9p-IM-AYHr-Se-viOg&usqp=CAU',
};

const Home = () => {
  return (
    <div className='admin'>
          <h1 style={{fontFamily:'cursive',fontSize:'50px'}}>        STUDENT GRADE BOOK SYSTEM</h1>

      <Link to="/Admin/login" className="profile-link">
        <div className="profile-button">
          <img src={profilePictures.admin} alt="Admin Profile" className="profile-image" />
          <button className="button">Admin</button>
        </div>
      </Link>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '150px' }}>
      <Link to="/Student" className="profile-link">
        <div className="profile-button">
          <img src={profilePictures.user} alt="User Profile" className="profile-image" />
          <button className="button">Student</button>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default Home;
