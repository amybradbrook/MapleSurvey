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
        <h1 className="about-heading">Meet Our Team</h1>
        <div className="team-grid">
          <div className="team-card">
            <img 
              src = {Image}
              alt="Sarah Johnson"
              className="team-image"
            />
            <div className="team-info">
              <h2 className="team-name">Sarah Johnson</h2>
              <p className="team-description">Lead Developer with 10 years of experience in web applications and a passion for creating intuitive user experiences.</p>
            </div>
          </div>
          <div className="team-card">
            <img 
              src= {Image2}
              alt="Michael Chen"
              className="team-image"
            />
            <div className="team-info">
              <h2 className="team-name">Michael Chen</h2>
              <p className="team-description">Product Designer specializing in user research and interface design, focusing on creating accessible and beautiful applications.</p>
            </div>
          </div>
          <div className="team-card">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="Emma Davis"
              className="team-image"
            />
            <div className="team-info">
              <h2 className="team-name">Emma Davis</h2>
              <p className="team-description">Frontend Developer with expertise in React and modern JavaScript frameworks, dedicated to writing clean, maintainable code.</p>
            </div>
          </div>
          <div className="team-card">
            <img 
              src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef"
              alt="David Wilson"
              className="team-image"
            />
            <div className="team-info">
              <h2 className="team-name">David Wilson</h2>
              <p className="team-description">Full Stack Developer specializing in database design and API development, with a focus on scalable solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsPage
