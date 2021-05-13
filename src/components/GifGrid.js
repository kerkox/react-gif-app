import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs('One Punch');
  }, [])

  const getGifs = async (search) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=awIobGquEIHEtuhoeE1z5u6TLEigQd4P&limit=10&q=${search}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
      }
    })
    console.log(gifs);
    setImages(gifs)
  }


  return (
    <div>
      <h3>{category}</h3>
      {
        images.map(img => (
          <GifGridItem
            key={img.id}
            {...img} 
          />
        ))
        }
    </div>
  )
}
