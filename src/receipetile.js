import React from 'react'
import "./receipetile.css"

const ReceipeTile = ({recipe}) => {
  return (
         <div className='receipeTile' onClick={()=>
         window.open(recipe.recipe.url)
         }>
      <img className="recipe_Tile_image" src={recipe.recipe.image} alt="recipe-1"/>
      <p className='recipe_Tile_name'>{recipe.recipe.label}</p>
    </div>
  )
}

export default ReceipeTile 