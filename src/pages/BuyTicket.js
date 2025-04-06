import { useParams, useNavigate } from 'react-router-dom';
import "./BuyTicket.css";
import Navbar from '../Components/Navbar';
import { nowShowing, comingSoon } from '../Components/movieData.js'; 
import { useState } from 'react';
import Ticket from '../Components/Ticket';

export default function BuyTicket() {
  const { title } = useParams();
  const navigate = useNavigate();
  
  const allMovies = [...nowShowing, ...comingSoon];
  const decodedTitle = decodeURIComponent(title);
  const movie = allMovies.find(m => m.title === decodedTitle);

  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(movie ? parseFloat(movie.price.replace('₱', '')) : 0);
  const [showTicket, setShowTicket] = useState(false);

  if (!movie) {
    navigate('/');
    return null;
  }

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value, 10);
    setTicketQuantity(quantity);
    setTotalPrice(quantity * parseFloat(movie.price.replace('₱', '')));
  };

  const handleBuyTickets = () => {
    setShowTicket(true);
  };

  const handleCloseTicket = () => {
    setShowTicket(false);
  };

  return (
    <div className="buy-tickets-page">
      <Navbar />
      {showTicket && (
        <Ticket 
          movieTitle={movie.title} 
          onClose={handleCloseTicket} 
          ticketQuantity={ticketQuantity} 
        />
      )}
      <div className="section-headers"></div>
      <div className='movie-container'>
        <img src={movie.imageUrl} alt={movie.title} className='image-style' />
        <div className='movie-details'>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <h3>{movie.price}</h3>
          <div className='buy-ticket-container'>
            <h3>Buy Ticket</h3>
            <div className="ticket-quantity">
              <label htmlFor="ticketQuantity">Select Number of Tickets:</label>
              <input 
                type="number" 
                id="ticketQuantity" 
                value={ticketQuantity} 
                min="1" 
                max="10" 
                onChange={handleQuantityChange} 
              />
            </div>
            <div className="total-price">
              <h4>Total Price: ₱{totalPrice.toFixed(2)}</h4>
            </div>
            <button className="buy-button" onClick={handleBuyTickets}>
              Confirm Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}