import React, { useState } from 'react';
import './HomeScreen.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoPeopleSharp } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';

const WeddingApp = () => {
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);
  const [selectedViewerImage, setSelectedViewerImage] = useState(0);
  const userPhotos = [
    '1.jpg','2.jpg','3.png'
  ];
  const navigate = useNavigate();
  const openMap = (url) => {
    window.open(url, '_blank') || toast.error('Could not open maps');
  };


  const handleImagePress = (index) => {
    setSelectedViewerImage(index);
    setIsImageViewerVisible(true);
  };
  const styles = {
    primaryInfoSection: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap', // Revert to wrapping items
      justifyContent: 'center',
      padding: '5px',
      maxWidth: '100%',
      boxSizing: 'border-box',
    },
    infoCard: {
      width: '100%', // Revert to full width for mobile view
      maxWidth: '300px', // Limit the width for larger screens
      padding: '20px',
      borderRadius: '15px',
      textAlign: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    },
    familyGradient: {
      background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
    },
    brideGradient: {
      background: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)',
    },
    infoCardTitle: {
      margin: '10px 0 5px',
      fontSize: '15px',
      color: '#333',
    },
    infoCardSubtitle: {
      fontSize: '14px',
      color: '#777',
    },
  };
  return (
    <div className="container">
      <div
        className="heroImage"
        style={{
          backgroundImage: 'url(/home.png)', // Added background image
          backgroundSize: 'cover', // Ensure the image covers the entire area
          backgroundPosition: 'center', // Center the image
        }}
      >
        <div className="heroGradient">
          <h1 className="heroTitle">Chandrima & Bubai</h1>
          <p className="heroSubtitle">April 18, 2025</p>
        </div>
      </div>
      <div style={styles.primaryInfoSection}>
      {/* Family Info */}
        <div
          style={{ ...styles.infoCard, ...styles.familyGradient }}
          onClick={() => navigate('/family')}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IoPeopleSharp size={24} color="#4ECDC4" />
            <h3 style={{ ...styles.infoCardTitle, margin: 0 }}>Family</h3>
          </div>
          <p style={{ ...styles.infoCardSubtitle, margin: 0 }}>Meet Us</p>
        </div>
      </div>


      {/* Bride's Venue */}
      <div
        style={{ ...styles.infoCard, ...styles.brideGradient }}
        onClick={() => openMap('https://maps.app.goo.gl/rARVwcUr1rvNfZUS6')}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MdLocationOn size={24} color="#FF6B6B" />
            <h3 style={{ ...styles.infoCardTitle, margin: 0 }}>Bride's Venue</h3>
          </div>
          <p style={{ ...styles.infoCardSubtitle, margin: 0 }}>Kanchrapara</p>
        </div>
      </div>


      {/* Groom's Venue */}
      <div
        style={{ ...styles.infoCard, ...styles.brideGradient }}
        onClick={() => openMap('https://maps.app.goo.gl/zwz5KmtK7nrGe5MPA')}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MdLocationOn size={24} color="#FF6B6B" />
            <h3 style={{ ...styles.infoCardTitle, margin: 0 }}>Groom's Venue</h3>
          </div>
          <p style={{ ...styles.infoCardSubtitle, margin: 0 }}>Margram</p>
        </div>
      </div>

    </div>

      {/* Photo Actions */}
       <div className="photoActions">
        <button
          className="photoActionButton"
          onClick={() => navigate('/gallery')}
        >
          View Gallery
        </button>
      </div> 

      {/* Featured Moments */}
      <div className="featuredSection">
        <h2 className="featuredTitle">Featured Moments</h2>
        <div className="featuredCarousel">
          {userPhotos.map((photo, index) => (
            <div key={index} className="slideContainer" onClick={() => handleImagePress(index)}>
              <img src={photo} alt={`Slide ${index}`} className="featuredImage" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Viewer Modal */}
      {isImageViewerVisible && (
  <div className="imageViewerOverlay">
    <button
      className="closeButton"
      onClick={() => setIsImageViewerVisible(false)}
    >
      ❌
    </button>

    <img
      src={userPhotos[selectedViewerImage]}
      alt="Full Screen"
      className="fullScreenImage"
    />

    <button
      className="arrowButton left"
      onClick={() =>
        setSelectedViewerImage((prev) =>
          prev === 0 ? userPhotos.length - 1 : prev - 1
        )
      }
    >
      &#8592;
    </button>

    <button
      className="arrowButton right"
      onClick={() =>
        setSelectedViewerImage((prev) =>
          prev === userPhotos.length - 1 ? 0 : prev + 1
        )
      }
    >
      &#8594;
    </button>
  </div>
)}

    </div>
  );
};

export default WeddingApp;