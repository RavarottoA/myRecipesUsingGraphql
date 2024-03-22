import React from 'react';
import styles from './styles.module.css';

const RecipeCard = ({ title }) => {

    return (
        <div className={styles.mainContainer}>
            <button
                className={styles.titleBtn}
            >
                {title}
            </button>
        </div>
    );
};

export default RecipeCard;
