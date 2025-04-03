import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BuyTicket from "./pages/BuyTicket";


export default function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/buy-tickets/:title" element={<BuyTicket />} />
      </Routes>
    </Router>
  )
}
