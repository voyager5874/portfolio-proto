import React from 'react';
import styles from './Header.module.css'
import {Navbar} from "./Navbar";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <Navbar/>
            </div>

        </div>
    );
};

