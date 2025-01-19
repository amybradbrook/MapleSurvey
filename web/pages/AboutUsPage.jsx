import React from 'react';
import { NavBar } from '../components/NavBar';
import './AboutUsPage.css';

import Image1 from '../assets/profiles/AmyBardbrook.jpg'
import Image2 from '../assets/profiles/KatieLonsway.png'
import Image3 from '../assets/profiles/ShaySheibnai.jpg'
import Image4 from '../assets/profiles/JadKreit.jpg'

const AboutUsPage = () => {
  return (
    <>
      <NavBar />
      <div className="about-container">
        <h1 className="about-heading">Meet Our Team!</h1>
        <div className="team-grid">
          <div className="team-card">
            <img 
              src = {Image1}
              alt="Amy Bradbrook"
              className="team-image"
            />
            <div className="team-info">
              <br></br>
              <h2 className="team-name">Amy Bradbrook</h2>
              <br></br>
              <p className="team-description">Hi, I'm Amy! I'm a 4th year computer science student at the University of Ottawa! A fun fact about me is I love painting!</p>
            </div>
          </div>
          <div className="team-card">
            <img 
              src= {Image2}
              alt="Katie Lonsway"
              className="team-image"
            />
            <div className="team-info">
              <br></br>
              <h2 className="team-name">Katie Lonsway</h2>
              <br></br>
              <p className="team-description">Im Katie, im a 3rd year computer science studend at uOttawa and a fun fact about me is this photo is too zomed in!</p>
            </div>
          </div>
          <div className="team-card">
            <img 
              src= {Image3}
              alt="Shay Sheibani"
              className="team-image"
            />
            <div className="team-info">
              <br></br>
              <h2 className="team-name">Shay Sheibani</h2>
              <br></br>
              <p className="team-description">Hi, I'm Shay. I'm a second year computer science student at the University of Ottawa! my fun fact is I like working out with my friends!</p>
            </div>
          </div>
          <div className="team-card">
            <img 
              src= {Image4}
              alt="Jad Kreit"
              className="team-image"
            />
            <div className="team-info">
              <br></br>
              <h2 className="team-name">Jad Kreit</h2>
              <br></br>
              <p className="team-description">Hello! I'm Jad, and I'm a 2nd year Software Engineering studen. Fun Fact: I play the Violiona and do some art on Blender!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsPage
