import React, { useEffect, useState } from 'react';
import './App.css';
import Images from './components/Images'

function App() {
  const [images, setImages] = useState(null)
 const  getGalleryImages = async () => {
  const result = await fetch()
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
