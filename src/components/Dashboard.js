import React from 'react';
import Typewriter from 'typewriter-effect/dist/core';

let aboutme = document.getElementById('header-aboutme');

let typewriter = new Typewriter(aboutme, {
  // strings: ['Software', 'Developer'],
  wrapperClassName: "new",
  autoStart: false,
});

typewriter
  .pauseFor(2500)
  .typeString('Hi, I am Aditya Mulik, a')
  .pauseFor(300)
  .deleteChars(1)
  .typeString('<strong></strong>Software Developer! ')
  .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
  .pauseFor(1000)
  .start();

const Home = () => (
  <div className="dashboard">
    <img className="profile-picture" src={process.env.PUBLIC_URL + '/images/aditya.png'} alt="profilePicture" />
    <h1>Aditya Mulik</h1>
    <h2 id="header-aboutme"></h2>
    <button>Resume</button>
    <button><a href="mailto:aditya.mulik@gmail.com">Email Me</a></button>
  </div>
);

export default Home;