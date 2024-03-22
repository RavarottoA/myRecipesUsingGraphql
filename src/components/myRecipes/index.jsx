import React, {useEffect, useState} from 'react';
import RecipeCard from './components/recipeCard';
import { getAllRecipes } from '../../graphql/queries';
import styles from './styles.module.css';

const MyRecipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getAllRecipes()
            .then(
                (recipes) => setRecipes(recipes)
            );
    }, []);

    const recipesList = recipes.map(recipe => (
        <RecipeCard title={recipe.title} id={recipe.id} key={recipe.id} />
    ));

    return (
        <div className={styles.mainContainer}>
            <div className={styles.recipesContainer}>
                {recipesList}
            </div>
        </div>
    );
};

export default MyRecipes;
