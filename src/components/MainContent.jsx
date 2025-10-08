
import TicketCard from './TicketCard';
import TaskStatus from './TaskStatus';

const MainContent = ({ tickets, inProgressTickets, resolvedTickets, onCardClick, onCompleteClick }) => {
  return (
    <main className="main-container">
      <div className="tickets-section">
        <h2 className="section-title">Customer Tickets</h2>
        <div className="tickets-grid">
          {tickets.map((ticket) => (
            <TicketCard 
              key={ticket.id} 
              ticket={ticket} 
              onCardClick={onCardClick}
            />
          ))}
        </div>
      </div>

      <div className="task-status-section">
        <TaskStatus 
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}
          onCompleteClick={onCompleteClick}
        />
      </div>
    </main>
  );
};

export default MainContent;