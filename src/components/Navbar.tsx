import React from 'react';
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <a href="">Главная</a>
            <a href="">Скиллы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
};