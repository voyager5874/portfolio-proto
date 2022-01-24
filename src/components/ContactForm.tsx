import React from 'react';
import styles from './ContactForm.module.css'

export const ContactForm = () => {
    return (

        <div className={styles.block}>
            <div className={styles.blockContentWrapper}>
                <h2 className={styles.blockHeader}>Связаться со мной</h2>
                <form className={styles.contactForm}>
                    <input type="text" placeholder={"Ваше имя"}/>
                    <input type="text" placeholder={"Ваш email"}/>
                    <textarea placeholder={"Ваше сообщение"}></textarea>
                    <input className={styles.submitButton} type="submit"/>
                </form>
            </div>
        </div>

    );
};

