import React, { useEffect, useState } from 'react';
import './App.css';
import Images from './components/Images'

function App() {
  const [images, setImages] = useState({
    fetching: false,
    error: false,
    urls: null
  })
  const getGalleryImages = async () => {
    try {
      const result = await fetch("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0", {
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
      setImages({ fetching: false, error: true })
    }
  }

  useEffect(() => {
    getGalleryImages()
  }, [])


  return (
    <div className="gallery">
      {images.urls.map((item, key) => (
        <Images key={key} url={item.urls.full} altText={item.alt_description} />
      ))}
    </div>
  );
}

export default App;