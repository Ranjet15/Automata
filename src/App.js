import React, { useState } from "react";
import Poster1 from "./Poster/1.jpg";
import Poster2 from "./Poster/2.jpg";
import Poster3 from "./Poster/3.jpg";
import Poster4 from "./Poster/4.jpg";
import Poster5 from "./Poster/5.png";
import Poster6 from "./Poster/6.jpg";
import Poster7 from "./Poster/7.jpg";
import Poster8 from "./Poster/8.jpg";
import Poster9 from "./Poster/9.jpg";
import Poster10 from "./Poster/10.jpg";
import Poster11 from "./Poster/11.png";

import Poster12 from "./Poster/12.jpg";
import Poster13 from "./Poster/13.jpg";
import Poster14 from "./Poster/14.jpeg";
import Poster15 from "./Poster/15.jpg";
import Poster16 from "./Poster/16.jpg";
import Poster17 from "./Poster/17.jpg";
import Poster18 from "./Poster/18.png";
import Poster19 from "./Poster/19.png";
import Poster20 from "./Poster/20.jpg";
import Poster21 from "./Poster/21.png";
import Poster22 from "./Poster/22.jpg";
import "./MovieListings.css";

const MovieListings = () => {
  const [activeSection, setActiveSection] = useState("nowShowing");

  const nowShowing = [
    { title: "My Love Will Make You Disappear", imageUrl: Poster1 },
    { title: "Oshi No Ko: The Final Act", imageUrl: Poster2 },
    { title: "Snow White", imageUrl:  Poster3},
    { title: "Ne Zha 2", imageUrl: Poster4  },
    { title: "SEVENTEEN WORLD TOUR IN CINEMAS", imageUrl: Poster5 }, 
    { title: "Locked", imageUrl: Poster6 },
    { title: "A Minecraft Movie", imageUrl: Poster7},
    { title: "Home Sweet Home", imageUrl: Poster8},
    { title: "Sinagtala", imageUrl: Poster9 },
    { title: "Rob1n", imageUrl: Poster10 },
    { title: "Flat Girls", imageUrl: Poster11}
  ];

  const comingSoon = [
    { title: "A Working Man", imageUrl: Poster12 },
    { title: "Drop", imageUrl: Poster13},
    { title: "Rule Breakers", imageUrl: Poster14},
    { title: "The Amateur", imageUrl: Poster15},
    { title: "The Red Envelope", imageUrl: Poster16},
    { title: "Un-Ex You", imageUrl: Poster17},
    { title: "The Chosen: The Last Supper", imageUrl: Poster18},
    { title: "Fatherland", imageUrl: Poster19},
    { title: "Samahan ng mga Makasalanan", imageUrl: Poster20},
    { title: "Sneaks", imageUrl: Poster21},
    { title: "The Accountant 2", imageUrl: Poster22}
  ];

  return (
    <div className="movie-listings-container">
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
                <button className="ticket-button">Buy tickets</button>
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
  );
};

export default MovieListings;