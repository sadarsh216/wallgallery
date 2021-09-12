import React, { useEffect, useState } from 'react';
import './App.css';
import Images from './components/Images'

function App() {
  const [images, setImages] = useState(null)
  const getGalleryImages = async () => {
    try {
      const result = await fetch(process.env.REACT_APP_API_LINK, {
        method: 'GET',
        headers: {
          "content-type": "application/json"
        }
      })
      const json = await result.json();
      if (json) {
        setImages(json)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getGalleryImages()
  }, [images])
  return (
    <div className="gallery">
      {images ? (
        <Images images={images} />
      ) : (
        <p>Coudn't load images</p>
      )}
    </div>
  );
}

export default App;
