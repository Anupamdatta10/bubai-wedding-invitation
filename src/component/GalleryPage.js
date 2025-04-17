import React, { useEffect, useState } from 'react';
import './GalleryPage.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const folderId = 'YOUR_FEATURE_FOLDER_ID';
  const API_KEY = 'AIzaSyDVCy33QziNZTANGT-1ekqrHXgVSZK2dfY';
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching images from Google Drive
    const fetchImages = async () => {
      try {
        const abc=`${API_KEY}`
        const link =`https://www.googleapis.com/drive/v3/files?q='1cMtQSDbs7LRYig0nwU92V99UglGsfi-h'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink)&orderBy=name`
        const response = await fetch(link);
        const data = await response.json();
        console.log("====data===>>>",data);
        // const imageUrls = data?.map(file => ({
        //   id: file.id,
        //   name: file.name,
        //   url: `https://drive.google.com/uc?export=view&id=${file.id}`,
        // }));
        // console.log("====imageUrls===>>>",imageUrls);
        setImages(data);
      } catch (error) {
        toast.error('Failed to fetch images');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);
  useEffect(()=>{
    console.log("====images===>>>",images);
  },[images])

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
      {isLoading ? (
        <div className="skeleton-loader">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="skeleton-box"></div>
          ))}
        </div>
      ) : (
        <div className="gallery-grid">
          {images?.files?.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={`${image.webViewLink}`} alt={`Gallery ${index}`} className="gallery-image" />
              {/* <iframe src={`https://drive.google.com/file/d/${image.id}/preview`} /> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
