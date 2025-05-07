import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './WeddingInvitation.css';
import WeddingInvitationvideo from './video.js';

export default function WeddingInvitation() {
  const weddingDetails = {
    groomName: "Tushar",
    brideName: "Madhuri",
    date: "May 17, 2025",
    venue: "Golden Palace Resort",
    address: "123 Wedding Lane, Dream City",
    receptionTime: "7:00 PM",
    ceremonyTime: "5:00 PM"
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date(`${weddingDetails.date} ${weddingDetails.ceremonyTime}`);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDetails.date, weddingDetails.ceremonyTime]);



  const simpleImages = [
    "/images/w10.jpeg",
    "/images/w12.jpeg",
    "/images/w4.jpeg",
    "/images/w13.jpeg",
    "/images/w14.jpeg",
    "/images/w15.jpeg",
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % simpleImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [simpleImages.length]);
  

  return (
    <div className="invitation">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay">
          <h2>Save the Date</h2>
          <h1>{weddingDetails.groomName} & {weddingDetails.brideName}</h1>
          <p>Are getting married on {weddingDetails.date}</p>
          <div className="countdown-timer">
            <div><span>{timeLeft.days}</span><p>Days</p></div>
            <div><span>{timeLeft.hours}</span><p>Hours</p></div>
            <div><span>{timeLeft.minutes}</span><p>Mins</p></div>
            <div><span>{timeLeft.seconds}</span><p>Secs</p></div>
          </div>
        </div>
      </div>
      <section className="full-image-section">
  <img src="/images/W3.png" alt="Full screen wedding" />
</section>
      <section className="video-section">
  {/* <h2>Our Journey</h2> */}
  
  <WeddingInvitationvideo/>

</section>
<section className="full-image-section2">
  <img src="/images/w6.png" alt="Full screen wedding" />
</section>
 
{/* <section className="full-image-section2">
  <img src="/images/w8.png" alt="Full screen wedding" />
</section> */}
 
 
 
<section className="functions-section">
  <h2 className="functions-title">Functions</h2>
 
  <div className="invitation-cards">
    {/* Haldi Invitation */}
    <div className="invitation-card">
      <h3>Haldi Ceremony</h3>
      <p className="date-time"> May 16, 2025 —  8:00 PM</p>
      <p className="venue"> Anand Palace , Naitale</p>
      <a
        href="https://maps.app.goo.gl/t61vNRoiB3sXrNH99" 
        target="_blank"
        rel="noopener noreferrer"
        className="map-button"
      >
        View Map
      </a>
    </div>
    <section className="simple-slider-section">
  <div className="simple-slider">
    {simpleImages.map((img, index) => (
      <div
        className={`simple-slide ${index === currentSlide ? 'active' : ''}`}
        key={index}
      >
        <img src={img} alt={`Slide ${index}`} />
      </div>
    ))}
  </div>
</section>
    {/* Wedding Invitation */}
    <div className="invitation-card">
      <h3>Wedding Ceremony</h3>
      <p className="date-time"> May 17, 2025 —  7:00 PM</p>
      <p className="venue">Anand Palace , Naitale</p>
      <a
        href="https://maps.app.goo.gl/t61vNRoiB3sXrNH99" 
        target="_blank"
        rel="noopener noreferrer"
        className="map-button"
      >
        View Map
      </a>
    </div>
  </div>
  
</section>
<section className="full-image-section3">
  <img src="/images/w9.png" alt="Full screen wedding" />
</section>
 
   
    </div>
  );
}
