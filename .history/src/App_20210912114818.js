import React, { useEffect, useState } from 'react';
import './App.css';
import Images from './components/Images'

function App() {
  const [images, setImages] = useState(null)
 const  getGalleryImages = async () => {
   const result = await fetch("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0", {
     method: 'GET',
     headers: {
       "content-type":"application/json"
     }
   })
}

 useEffect(() => {
  
 }, [])
  
  
  return (
    <div class="gallery">
      <Images />
    </div>
  );
}

export default App;
