import React, { useState } from "react";
import { useUser, useAction , useSignOut } from "@gadgetinc/react";
import { Link, useLocation } from "react-router";
import logoImage from '../assets/Maple_Survey.png';
import { api } from "../api";

export function NavBar() {
  const user = useUser(api);
  const location = useLocation();
  const signOut = useSignOut();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState(false);

  function openMenu(e) {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  }

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <Link to="/" style={{
        display: 'flex',
        alignItems: 'center',
        marginRight: '2rem'
      }}>
        <img src={logoImage} alt="MapleSurvey Logo" style={{
          height: '40px'
        }} />
      </Link>

      <div id = "navbar-nav-item" style={{
        display: 'flex',
        gap: '2rem',
        flexGrow: 1
      }}>
        {[
          { to: "/surveys", label: "Surveys", isAnchor: false },
          { to: "/about", label: "About Us", isAnchor: false},
        ].map(({ to, label, isAnchor }) => (
          <Link 
            key={to} 
            to={to}
            style={{
              color: (location.pathname === to || location.hash === to) ? '#2563eb' : '#4b5563',
              textDecoration: 'none',
              fontWeight: 500
            }}
            onClick={isAnchor ? (e) => scrollToSection(e, to.substring(1)) : undefined}
          >
            {label}</Link>
        ))}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <button 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-haspopup="true" 
          aria-expanded={isMenuOpen}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgb(75, 117, 49)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {user?.firstName ? user.firstName[0].toUpperCase() : '?'}
          </div>
          {user?.firstName && <span>Hi, {user.firstName}</span>}
          {error && <span style={{ color: 'red' }}>Sign out failed</span>}
        </button>
        <button style={{
          padding: '0.5rem 1rem',
          backgroundColor: 'rgb(75, 117, 49)',
          color: 'white',
          border: 'none',
          borderRadius: '0.375rem',
          cursor: 'pointer'
        }} onClick={signOut}>
          Sign Out
        </button>
      </div>
    </nav>
  );
}