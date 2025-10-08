const Footer = () => {

    return (
    <footer className="footer-container">
        <div className="footer-main">
            <aside className="footer-brand">
                <h2>CS — Ticket System</h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </aside>

            <nav className="footer-nav">
                <span className="footer-title">Company</span>
                <a>About Us</a>
                <a>Our Mission</a>
                <a>Contact Sales</a>
            </nav>

            <nav className="footer-nav">
                <span className="footer-title">Services</span>
                <a>Products & Services</a>
                <a>Customer Stories</a>
                <a>Download Apps</a>
            </nav>
            
            <nav className="footer-nav">
                <span className="footer-title">Information</span>
                <a>Privacy & Service</a>
                <a>Terms & Conditions</a>
                <a>Join Us</a>
            </nav>

            <nav className="footer-nav">
                <span className="footer-title">Social Links</span>
                <a><i className="fa-brands fa-twitter"></i> @CS - Ticket System</a>
                <a><i className="fa-brands fa-linkedin"></i> @CS - Ticket System</a>
                <a><i className="fa-brands fa-facebook"></i> @CS - Ticket System</a>
                <a><i className="fa-solid fa-envelope"></i> support@cst.com</a>
            </nav>
        </div>

        <div className="footer-bottom">
            <aside>
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
                <p>Made with &hearts; by TAOSHIFLEX</p>
            </aside>
        </div>
    </footer>
    );
};

export default Footer;
