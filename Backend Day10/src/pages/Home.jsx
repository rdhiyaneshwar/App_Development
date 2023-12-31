import React from 'react';
import '../assets/css/Home.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import ImageSlider from './Slider';
import Navigation from './Navbar';
import Footer from './Footer';
import Social from './Social';
function Home() {
    
  return (
    <>
   <Navigation/>  
   <Social/>
    <div className="home-container">
      <header>
      <p className="marquee">CARING FOR THE ONE'S WHO ONCE CARED FOR US</p>
      </header>
      <main>
        <section className="features">
       
          <div className="feature">
            <h2 className='dhiyanesh'>Find Care Services</h2>
            <p> Search for a variety of care services for your loved ones.</p>
          </div>
          <div className="feature">
            <h2 className='dhiyanesh'>Provider Directory</h2>
            <p>Explore a directory of trusted care providers in your area.</p>
          </div>
          <div className="feature">
            <h2 className='dhiyanesh'>Community Support</h2>
            <p>Join our community to share experiences and get support.</p>
          </div>
        </section>
      </main>
    </div>
  
    <ImageSlider /> 
    <Footer />
    </>
  );
}

export default Home;