import React, { useEffect, useState } from 'react';
import './App.css';
import Images from './components/Images'

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
        console.log(json)
      }
    } catch (e) {
      // console.log(e)
    }
  }

  useEffect(() => {
    getGalleryImages()
  }, [])


  return (
    <div className="gallery">
      {images ?(
        <>
          {images.map((item, key) => (
            <Images url={item.urls.full} altText={ item.alt_description} />
          ))}
        </>
      ):(
      <div>
        <p>Coudn't fetch images</p>
      </div>
      )}
    </div>
  );
}

export default App;
