import React, { useState } from 'react';
import Button from './Button';
import styles from '../Styles/RecipeCard.module.css';

const RecipeCard = ({ recipe, onDelete, onDetails }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedRecipe({ ...recipe });
  };

  const handleSaveEdit = () => {
    // Update the recipe data with the edited values
    recipe.label = editedRecipe.label;
    recipe.image = editedRecipe.image;
    recipe.nutrients.ENERC_KCAL = editedRecipe.nutrients.ENERC_KCAL;

    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedRecipe({
      ...editedRecipe,
      [name]: value,
    });
  };

  return (
    <div className={styles.recipe_card}>
      {isEditing ? (
        <div className={styles.editForm}>
          <input
            type="text"
            name="label"
            value={editedRecipe.label}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="image"
            value={editedRecipe.image}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="ENERC_KCAL"
            value={editedRecipe.nutrients.ENERC_KCAL}
            onChange={handleInputChange}
          />
          <div className={styles.container_btn}>
            <Button label="Save" onClick={handleSaveEdit} type="button" color="green" />
            <Button label="Cancel" onClick={handleCancelEdit} type="button" color="orange" />
          </div>
        </div>
      ) : (
        <div>
          <h2>{recipe.label}</h2>
          <img src={recipe.image} alt={recipe.label} />
          <p>₹ {recipe.nutrients.ENERC_KCAL}</p>
          <div className={styles.container_btn}>
            <Button label="Edit" onClick={handleEditClick} type="button" color="green" />
            <Button label="Details" onClick={() => onDetails(recipe)} type="button" color="blue" />
            <Button label="Delete" onClick={() => onDelete(recipe)} type="button" color="orange" />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
