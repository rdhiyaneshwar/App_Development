import React from 'react';
import '../assets/css/Footer.css';
import Navigation from './Navbar';

function Footer() {
  return (<>
  
    <footer className="footer-section">
     
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <div className='p1'>
              <h1>CareBee</h1>
              </div>
                <p>Copyright &copy; 2023,All Rights Reserved</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href="/Privacy">Privacy Privacy</a></li>
                  <li><a href="/Terms">Terms and Conditions</a></li>
                  <li><a href="/Faq">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Footer;
