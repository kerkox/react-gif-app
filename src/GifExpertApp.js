import React, {useState } from 'react';
import { AddCategory } from './components/AddCategory';
const GifExpertApp = () => {

  const initialState = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(initialState)

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
          categories.map((category, i) => {
          return <li key={i}>{category}</li>
          })
        }
      </ol>
    </>
  )
}

export default GifExpertApp;