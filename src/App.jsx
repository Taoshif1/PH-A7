import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Banner from "./components/Banner.jsx";
import MainContent from './components/MainContent.jsx';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/style.css';


function App() {
  const [availableTickets, setAvailableTickets] = useState([]);
  const [inProgressTickets, setInProgressTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  useEffect(() => {
    fetch('/tickets.json')
      .then(res => res.json())
      .then(data => {
        setAvailableTickets(data);
      })
      .catch(err => console.error("Failed to fetch tickets:", err));
  }, []);

  const handleAddToProgress = (ticketToAdd) => {
    if (inProgressTickets.find(ticket => ticket.id === ticketToAdd.id)) {
      toast.warn('This ticket is already in progress!');
      return;
    }
    setInProgressTickets([...inProgressTickets, ticketToAdd]);
    toast.info(`Ticket #${ticketToAdd.id} moved to In Progress.`);
  };

  const handleResolveTicket = (ticketToResolve) => {
    setResolvedTickets([...resolvedTickets, ticketToResolve]);
    setInProgressTickets(inProgressTickets.filter(ticket => ticket.id !== ticketToResolve.id));
    setAvailableTickets(availableTickets.filter(ticket => ticket.id !== ticketToResolve.id));
    toast.success(`Ticket #${ticketToResolve.id} has been resolved!`);
  };

  return (
    <>
      <Navbar />
      <Banner 
        inProgressCount={inProgressTickets.length} 
        resolvedCount={resolvedTickets.length} 
      />
      <MainContent 
        tickets={availableTickets} 
        inProgressTickets={inProgressTickets}
        resolvedTickets={resolvedTickets}
        onCardClick={handleAddToProgress}
        onCompleteClick={handleResolveTicket}
      />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
}

export default App;
