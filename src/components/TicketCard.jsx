

const TicketCard = ({ ticket, onCardClick }) => {
  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  };

  return (
    <div className="ticket-card" onClick={() => onCardClick(ticket)}>
      <div className="card-header">
        <h3>{ticket.title}</h3>
        <span className={`status-badge status-${ticket.status.toLowerCase()}`}>
          {ticket.status}
        </span>
      </div>
      <p className="card-description">{ticket.description}</p>
      <div className="card-footer">
        <span>#{ticket.id}</span>
        <span className={`priority-badge ${getPriorityClass(ticket.priority)}`}>
          {ticket.priority.toUpperCase()} PRIORITY
        </span>
        <span>{ticket.customer}</span>
        {/* Formatting the date to be more readable */}
        <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default TicketCard;