import { useParams, useNavigate } from 'react-router-dom';
import "./BuyTicket.css"
import Navbar from '../Components/Navbar';
import { nowShowing, comingSoon } from '../Components/movieData.js'; 

export default function BuyTicket() {
  const { title } = useParams();
  const navigate = useNavigate();
  
  const allMovies = [...nowShowing, ...comingSoon];
  const decodedTitle = decodeURIComponent(title);
  const movie = allMovies.find(m => m.title === decodedTitle);

  if (!movie) {
    navigate('/');
    return null;
  }

  return (
    <div className="buy-tickets-page">
      <Navbar/>
      <div className='movie-container'>
          <img src={movie.imageUrl} alt={movie.title} className='image-style' />
          <div className='movie-details'>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <h3>{movie.price}</h3>
            <div className='buy-ticket-container'>
              <h3>Buy Ticket</h3>
              {/*Add code for buying tickets :D*/}
            </div>
          </div>
      </div>
    </div>
  );
}