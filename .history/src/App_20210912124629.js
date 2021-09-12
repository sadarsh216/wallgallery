import React, { useEffect, useState } from 'react';
import './App.css';
import Images from './components/Images'
import Modal from './components/Modal';

function App() {
  const [images, setImages] = useState(null)
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
      console.log(e)
    }
  }

  useEffect(() => {
    getGalleryImages()
  }, [])


  return (
    <div className="gallery">
      {images ? (
        <Images images={images} />
      ) : (
        <p>Coudn't load images</p>
      )}
      <Modal show={true} handleClose={alert("")}>
        <p>Modal</p>
      </Modal>
    </div>
  );
}

export default App;
