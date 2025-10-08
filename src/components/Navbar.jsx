

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        {/* Left Side: Title */}
        <div className="navbar-brand">
          <h2>CS — Ticket System</h2>
        </div>
        
        {/* Right Side: Links and Button */}
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">FAQ</a>
          <a href="#">ChangeLog</a>
          <a href="#">Blog</a>
          <a href="#">Download</a>
          <a href="#">Contact</a>
          <button className="btn-new-ticket">
            + New Ticket
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;