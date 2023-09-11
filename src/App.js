import "./key"
import './App.css';
import Axios from "axios"
import { useState } from "react";
import ReceipeTile from "./receipetile";

function App() {
   const[query,setQuery]=useState("")
   const [recipes,setRecipe]=useState([])
   const [healthLabels,sethealthLabels]=useState("vegan")


  const YOUR_APP_ID="f03ad5e1"
  const YOUR_APP_KEY="0ed13ba291ab5d3f343c2648833d55cc"

  var url=`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}	`
  

  async function getReceipes(){
     var result= await Axios.get(url);
     setRecipe(result.data.hits)
     console.log(result.data);
  }

 const onSubmit = (e)=>{
  e.preventDefault();
  getReceipes();
 }

  return (
    <div className="app">
      <h1>Food Receipe Plaza 🍔</h1>
       <form className="app_searchForm" onSubmit={onSubmit}>
        <input className="app_input" type="text" placeholder="Enter The Ingredients" value={query} onChange={(e)=>setQuery(e.target.value)}></input>
        <input className="app_submit" type="submit" value="search"/>
        <select className="app_healthlabels">
          
          <option onClick={()=>sethealthLabels("vegan")}>Vegan</option>
          <option onClick={()=>sethealthLabels("Vegetarian")}>Vegetarian</option>
          <option onClick={()=>sethealthLabels("Alcohol-Cocktail")}>Alcohol-Cocktail</option>
          <option onClick={()=>sethealthLabels("Dairy-Free")}>Dairy-Free</option>
          <option onClick={()=>sethealthLabels("Low Potassium")}>Low Potassium</option>
          <option onClick={()=>sethealthLabels("wheat-free")}>Wheat-Free</option>
          <option onClick={()=>sethealthLabels("Kidney-Friendly")}>Kidney-Friendly</option>
          <option onClick={()=>sethealthLabels("egg-free")}>Egg-Free</option>
          <option onClick={()=>sethealthLabels("peanut-free")}>Peanut-Free</option>
          <option onClick={()=>sethealthLabels("tree-nut-free")}>Tree-Nut-Free</option>
          <option onClick={()=>sethealthLabels("Sesame-Free")}>Sesame-Free</option>
          <option onClick={()=>sethealthLabels("fish-free")}>Fish-Free</option>
          <option onClick={()=>sethealthLabels("No oil added")}>No oil added</option>
        </select>
       </form>
       <div className="app_recipe">
       {recipes.map((sendrecipevalue) =>{
           console.log(sendrecipevalue)
          return <ReceipeTile recipe={sendrecipevalue}/>
        })}

       </div>
    </div> 
  );
}

export default App;
