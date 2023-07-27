import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from './logs.png';


function App() {
  return (
<div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" height="30" className="mr-2" />
            BookNest
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              {/* Add more navigation items as needed */}
            </ul>
          </div>
          {/* Register and Login Buttons */}
          <div>
            <a href="/register" className="btn btn-light mr-2">Register</a>
            <a href="/login" className="btn btn-outline-light">Login</a>
          </div>
        </div>
      </nav>

      {/* Scrolling Text Section */}
      <section className="py-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="scrolling-text-container">
                <div className="scrolling-text">
                  <p>
                    ANNOUNCEMENT: Grand Opening!! We are ready for business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2>About Us</h2>
              <p className="lead">
                Our library is dedicated to providing access to a wide range of books and knowledge. With a carefully curated collection and a comfortable reading environment, we aim to enrich the lives of our readers and foster a love for literature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Library Services</h2>
              <ul className="list-unstyled">
                <li>Borrow books from our vast collection.</li>
                <li>Access digital resources and e-books online.</li>
                <li>Participate in book clubs and reading events.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2>Events and Workshops</h2>
              <ul className="list-unstyled">
                <li>Attend author signings and literary workshops.</li>
                <li>Discover new releases and bestsellers.</li>
                <li>Explore a variety of genres and topics.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-5" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2>Contact Us</h2>
              <p className="lead">
                If you have any questions or inquiries, feel free to contact us. Our team will be happy to assist you.
              </p>
              <p>Email: info@ourlibrary.com</p>
              <p>Phone: (123) 456-7890</p>
              {/* Add more contact information as needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
