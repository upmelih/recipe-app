
import React from 'react';



const RecipeDetail = ({ details }) => {
  if (!details) return <p>No details available</p>;

  return (
    <div>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} />
      {/* Display more details as needed */}
      <p>Ready in minutes: {details.readyInMinutes}</p>
      <p>Servings: {details.servings}</p>
      <p>Instructions: {details.instructions}</p>
      
      
    </div>
  );
};

export default RecipeDetail;
