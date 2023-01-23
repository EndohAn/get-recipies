
import {useEffect, useState} from"react";
import './App.css';
import MyRecipesComponent from "./MyRecipesComponent";
import image from './img.jpg';
import video from './food.mp4';


function App(){

  const My_ID = "801c72eb";
  const My_KEY = "29c30b95fab850060525f868bb388667";
  const [searchInput,setSearchInput] = useState('');
  const [getRecipes,setGetRecipes] = useState([]);
  const[wordSubmitted,setWordSubmitted] =useState('avocado');

  useEffect(()=>{
    const getApi = async()=>{
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${My_ID}&app_key=${My_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setGetRecipes(data.hits);
    }
    getApi();
  },[wordSubmitted]);

  const myRecipeSearch =(e)=>{
    console.log(e.target.value);
    setSearchInput(e.target.value);
  }
  const finalSearch =(e)=>{
    e.preventDefault();
    setWordSubmitted(searchInput);
  }
 
  return(
    <div>
        <div className ="container" >
      {/* <img  className="main_img" src = {image} alt="food"/>   */}
      <video autoPlay muted loop>
        <source src={video} type='video/mp4'/>
      </video>
      <h1>Find  a  recipe</h1>  
    </div>

    <div className="container">
      
      <form onSubmit={finalSearch}>
        <input onChange={myRecipeSearch} value={searchInput} className="search" placeholder="Search recipes ...."></input>
      </form>
    </div>
    <div className="container">
      <button>ENTER</button>
    </div>
  <div>
     {getRecipes.map((element,index )=>(
      <MyRecipesComponent key={index}
      propsLabel = {element.recipe.label}
      propsImage = {element.recipe.image}
      propsCalories = {element.recipe.calories}
      propsCuisineType = {element.recipe.cuisineType}
      propsIngredients = {element.recipe.ingredientLines}         
      />
     ))}
    
    </div>
    </div>
  )
}

export default App;
