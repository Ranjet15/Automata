import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Ticket.css";

export default function Ticket({ movieTitle, onClose, ticketQuantity}) {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="ticket-overlay">
      <div className="ticket-container">
        <div className="ticket-card">
          <h1 className="ticket-movie-title">{movieTitle}</h1>
          <div className="ticket-divider"></div>
          
          <div className="ticket-section">
            <h2 className="ticket-section-title">Date</h2>
            <p className="ticket-section-content">01:30 PM, Mon, 14 Apr</p>
            <p className="ticket-screen">Cinema 3</p>
          </div>
          
          <div className="ticket-divider"></div>
          
          <div className="ticket-section">
            <h2 className="ticket-section-title">Theatre</h2>
            <p className="ticket-section-content">SM City North Edsa</p>
          </div>
          
          <div className="ticket-divider"></div>
          
          <div className="ticket-section">
            <h2 className="ticket-section-title">Seat</h2>
            <p className="ticket-section-content">PRIME | C18</p>
          </div>

          <div className="ticket-section">
            <p className="ticket-amount"> x {ticketQuantity}</p>
          </div>
          
          <button className="ticket-close-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}