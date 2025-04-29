import React, { useEffect, useState } from 'react';
import './GalleryPage.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  const [images, setImages] = useState(['g1.jpg','g2.jpg','g3.jpg','g4.jpg','g5.jpg','g6.jpg','g7.jpg','g8.jpg','g9.jpg','g10.jpg','g11.jpg','g12.jpg','g13.jpg']);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const styles = {
    backIcon: {
      fontSize: '16px',
      color: '#333',
    },
    backText: {
      marginLeft: '8px',
      fontSize: '16px',
      color: '#333',
    },
    backButton: {
      display: 'flex',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
    },
  }
  return (
    <div className="gallery-container">
      <button style={styles.backButton} onClick={() => navigate('/')}>
      <span style={styles.backIcon}>&larr;</span>
      <span style={styles.backText}>Back</span>
      </button>
      <h1 className="gallery-title">Gallery</h1>
      
        <div className="gallery-grid">
          {images?.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={`${image}`} alt={`Gallery ${index}`} className="gallery-image" />
              {/* <iframe src={`https://drive.google.com/file/d/${image.id}/preview`} /> */}
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default GalleryPage;
