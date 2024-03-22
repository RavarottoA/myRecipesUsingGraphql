import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/authentication?shown=login');
    };

    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.welcomeTxt}>My Recipes</h1>
            <button onClick={handleLoginClick} className={styles.loginBtn}>
                Login
            </button>
        </div>
    );
};

export default Navbar;
