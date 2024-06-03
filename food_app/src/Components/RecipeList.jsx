import React from 'react';
import RecipeCard from './RecipeCard';
import styles from '../Styles/RecipeList.module.css';
const RecipeList = ({ recipes, onEdit, onDelete, onDetails }) =>{
  return (
    <div className={styles.recipeList}>
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          recipe={recipe.food}
          onEdit={onEdit}
          // onDelete={onDelete}
          onDelete={() => onDelete(recipe)}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
}

export default RecipeList;
