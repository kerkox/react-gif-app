import React, {useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = ({ defaultCategories = []}) => {

  const [categories, setCategories] = useState(defaultCategories);

  // const handleAdd = () => {
  //   setCategories(cats => [...cats, 'Jeniffer Rosales']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      <ol>
        { 
          categories.map((category, i) => (
             <GifGrid key={i} category={category}/>
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;