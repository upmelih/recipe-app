

// SearchRecipes.js
import React, { useState } from 'react';
import axios from 'axios';
import RecipeDetail from './RecipeDetail'; // Import the new component
import './SearchRecipes.css'

const SearchRecipes = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const searchRecipes = async () => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=e6d45047027e4a9fb96ad604ad6bb104`);
        setRecipes(response.data);
        setSelectedRecipe(null);
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    
  };

  const fetchRecipeDetails = async (id) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=e6d45047027e4a9fb96ad604ad6bb104`);
      setSelectedRecipe(response.data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  

  

  return (
    <div>
      {<div><input
        type="text"
        value={ingredients}
        onChange={handleInputChange}
        placeholder="Enter ingredients..."
      />
      <button onClick={searchRecipes}>Search Recipes</button></div>}
      
        {selectedRecipe==null? <div className='recipeMenuStyle'>
        {recipes.map((recipe) => (
          <div className="menuItemStyle" key={recipe.id} onClick={() => fetchRecipeDetails(recipe.id)}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} style={{cursor: 'pointer'}} />
          </div>
        ))}
      </div> :<RecipeDetail details={selectedRecipe}/>}

      
     

      {/* Render the RecipeDetail component and pass the selectedRecipe as props */}
      
    </div>
  );
};

export default SearchRecipes;








// import React, { useState } from 'react';
// import axios from 'axios';

// const SearchRecipes = () => {
//   const [ingredients, setIngredients] = useState('');
//   const [recipes, setRecipes] = useState([]);

//   const handleInputChange = (event) => {
//     setIngredients(event.target.value);
//   };

//   const searchRecipes = async () => {
//     try {
//       const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=4514bf89c1ae4d3792c5430063fab343`);
//       setRecipes(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={ingredients}
//         onChange={handleInputChange}
//         placeholder="Enter ingredients separated by commas"
//       />
//       <button onClick={searchRecipes}>Search Recipes</button>
//       <div>
//         {recipes.map((recipe) => (
//           <div key={recipe.id}>
//             <p>{recipe.title}</p>
//             <img src={recipe.image} alt={recipe.title} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchRecipes;
