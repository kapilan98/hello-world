import React,{useEffect,useState} from 'react';
import './App.css';
//import axios from 'axios'
import Recipe from './Recipe.js'


const App= () =>{

  const [recipes, setRecipes]=useState([])
  const [search, setSearch]=useState('')
  const [query,setQuery]=useState('chicken')

  const App_id='c9f5e4ed'
  const App_key='95f1ee47754c45824e2b415b0d804bd5'

  useEffect(()=>{
    getRecipes()
  },[query]) 

  const getRecipes=async()=>{
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`)
    const data= await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

const updateState=(e)=>{
  setSearch(e.target.value)
  console.log(search)
}
const getSearch=(e)=>{
  e.preventDefault()
  setQuery(search)
  setSearch('')
}

  return(
    <div className="App">
    <h1>Welcome to Kapil's Recipe</h1>
    <h3>Type the any recipe you want to search for. Eg: Chicken, banana, spaghetti etc.</h3>
    <form className="search-form" onSubmit={getSearch}>
      <input type="text" className="search-bar" value={search} onChange={updateState}/>
      <input type="submit" value="Submit" className="search-button" onSubmit={getSearch}/>
    </form>
    {recipes.map(recipe=>(

      <Recipe key={recipe.recipe.calories} title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}/>
      ))}

    </div>
    )
}

export default App;
