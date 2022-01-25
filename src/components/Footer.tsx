import React from 'react';
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.block}>
            <div className={styles.blockContentBox}>
                <h3 className={styles.blockHeader}>Александр Савкин</h3>
                <div className={styles.contactsBox}>
                    <div className={styles.contact}></div>
                    <div className={styles.contact}></div>
                    <div className={styles.contact}></div>
                    <div className={styles.contact}></div>
                </div>
                <div className={styles.ps}>it-inc 2022</div>
            </div>

        </div>
    );
};

