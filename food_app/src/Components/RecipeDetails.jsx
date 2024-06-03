import React from 'react';
import Button from './Button';
import styles from '../Styles/RecipeDetails.module.css'
const RecipeDetails = ({ recipe, onClose }) =>{
  return (
    <div className={styles.modal}>
      <div className={styles.details_content}>
        <h2>{recipe.label}</h2>
        <p>Calories: ₹ {recipe.nutrients.ENERC_KCAL}</p>
        <Button label="Close" onClick={onClose} color='blue' />
      </div>
    </div>
  );
}

export default RecipeDetails;
