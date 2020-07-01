import React from 'react'
import style from './recipe.module.css'
const Recipe = ({title,calories,image,ingredients}) =>{
    return(
        <div className={style.recipe}>
        <h1 className={style.title}>{title}</h1>
        <img src={image} alt="" className={style.image}/>        
        <h2 className={style.cal}>Calories : {calories}</h2>
        <h2>Ingredients</h2>
        <ol  className={style.recipe1} >{

            ingredients.map(ingredient=>
            (
            <li>{ingredient.text}</li>))
        }</ol>
        </div>
    )
}
export default Recipe