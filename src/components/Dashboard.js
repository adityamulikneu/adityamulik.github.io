import React from 'react';

const Home = () => (
  <div className="dashboard">
    <img className="profile-picture" src={process.env.PUBLIC_URL + '/images/aditya.png'} alt="profilePicture" />
    <h1>Aditya Mulik</h1>
    <button>Resume</button>
    <button><a href="mailto:aditya.mulik@gmail.com">Email Me</a></button>
  </div>
);

export default Home;