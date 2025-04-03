import React, { useState } from "react";
import "../MovieListings.css";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import { nowShowing, comingSoon } from '../Components/movieData.js';

export default function Home() {

    const navigate = useNavigate();

    const [activeSection, setActiveSection] = useState("nowShowing");

    const handleMovieClick = (movie) => {
        const encodedTitle = encodeURIComponent(movie.title);
        navigate(`/buy-tickets/${encodedTitle}`);
      };
    


  return (
    <div className="movie-listings-container">
    <Navbar/>
    <div className="section-headers">
      <h2 
        className={`section-header ${activeSection === "nowShowing" ? "active" : ""}`}
        onClick={() => setActiveSection("nowShowing")}
      >
        NOW SHOWING
      </h2>
      <h2 
        className={`section-header ${activeSection === "comingSoon" ? "active" : ""}`}
        onClick={() => setActiveSection("comingSoon")}
      >
        COMING SOON
      </h2>
    </div>

    <div className="sections">
      {activeSection === "nowShowing" && (
        <div className="movie-grid">
          {nowShowing.map((movie, index) => (
            <div key={index} className="movie-card">
              <div className="movie-poster-container">
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="movie-poster"
                />
              </div>
              <h3>{movie.title}</h3>
              <div className="button-container"><button className="ticket-button"  onClick={() => handleMovieClick(movie)} >Buy tickets</button></div>
            </div>
          ))}
        </div>
      )}

      {activeSection === "comingSoon" && (
        <div className="movie-grid">
          {comingSoon.map((movie, index) => (
            <div key={index} className="movie-card">
              <div className="movie-poster-container">
                <img
                  src={movie.imageUrl}
                  alt={movie.title}
                  className="movie-poster"
                />
              </div>
              <h3>{movie.title}</h3>
              <button className="ticket-button">View More Details</button>
            </div>
          ))}
        </div>
      )}
    </div>
  </div> 
  )
}
