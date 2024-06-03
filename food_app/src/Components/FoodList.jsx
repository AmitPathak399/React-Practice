import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import AddProductForm from './AddProductForm';
import SearchBar from './SearchBar';
import DeleteRecipe from './DeleteRecipe';
import styles from '../Styles/FoodList.module.css';

const API_URL = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free';

const API_HEADERS = {
  'X-RapidAPI-Key': '6254b3aee9msh8cc346786026d33p1f9a4cjsn9830ee75dbf2',
  'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
};

const FoodList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isAddingRecipe, setIsAddingRecipe] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL, { method: 'GET', headers: API_HEADERS });
      const data = await response.json();
      console.log(data);
      setRecipes(data.hints);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteClick = (recipe) => {
    setRecipeToDelete(recipe);
    setShowDeleteConfirmation(true);
  };
  const handleDeleteConfirmed = () => {
    // After confirmation, delete the selected recipe
    if (recipeToDelete) {
      const updatedRecipes = recipes.filter((recipe) => recipe.food.label !== recipeToDelete.food.label);
      setRecipes(updatedRecipes);
      setRecipeToDelete(null); // Clear the selected recipe
    }
    setShowDeleteConfirmation(false);
  };
  const handleDeleteCancelled = () => {
    setRecipeToDelete(null);
    setShowDeleteConfirmation(false);
  };

  // Detail of Recipe // 
  const handleDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetails = () => {
    setSelectedRecipe(null);
  };

// add new recipe //
  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    // alert('Product added successfully')
    setIsAddingRecipe(false);
  };


// Search Reicpe //
  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === '') {
      setRecipes(recipes);
    } else {
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.food.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setRecipes(filteredRecipes);
    }
  };


  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h1 className={styles.header}>Recipe App</h1>

        <button className={styles.button} onClick={() => setIsAddingRecipe(true)}>
          Add Recipe
        </button>
        {isAddingRecipe && <AddProductForm onSubmit={handleAddRecipe} />}
        <SearchBar onSearch={handleSearch} />
      </header>
      <RecipeList
        recipes={recipes}
        onDelete={handleDeleteClick}
        onDetails={handleDetails}
      />
      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} onClose={handleCloseDetails} />
      )}
      {showDeleteConfirmation && (
        <DeleteRecipe
          onDelete={handleDeleteConfirmed}
          onCancel={handleDeleteCancelled}
        />
      )}
    </div>
  );
}

export default FoodList;
