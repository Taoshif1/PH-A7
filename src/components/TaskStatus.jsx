

const TaskStatus = ({ inProgressTickets, resolvedTickets, onCompleteClick }) => {
  return (
    <div className="task-status-wrapper">
      <h2 className="section-title">Task Status</h2>
      <div className="in-progress-list">
        {inProgressTickets.length === 0 ? (
          <p className="empty-message">Select a ticket to add to Task Status.</p>
        ) : (
          inProgressTickets.map(ticket => (
            <div key={ticket.id} className="in-progress-item">
              <span>{ticket.title}</span>
              <button onClick={() => onCompleteClick(ticket)} className="complete-btn">
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      <h2 className="section-title" style={{ marginTop: '2rem' }}>Resolved Task</h2>
      <div className="resolved-list">
        {resolvedTickets.length === 0 ? (
          <p className="empty-message">No resolved tasks yet.</p>
        ) : (
          resolvedTickets.map(ticket => (
            <div key={ticket.id} className="resolved-item">
              <span>{ticket.title}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
