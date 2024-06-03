import React from 'react'
import Button from './Button'
import styles from '../Styles/RecipeDetails.module.css'
const DeleteRecipe = ({ onDelete, onCancel }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.details_content}>
                <h3>Are you sure you want to delete this item?</h3>
                <Button label="Delete" onClick={onDelete} color='orange' />
                <Button label="Cancel" onClick={onCancel} color='blue' />
            </div>
        </div>
    )
}

export default DeleteRecipe
