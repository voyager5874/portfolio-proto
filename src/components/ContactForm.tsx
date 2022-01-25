import React from 'react';
import styles from './ContactForm.module.css'

export const ContactForm = () => {
    return (

        <div className={styles.block}>
            <div className={styles.blockContentBox}>
                <h2 className={styles.blockHeader}>Связаться со мной</h2>
                <form className={styles.contactForm}>
                    <input className={styles.inputField} type="text" placeholder={"Ваше имя"}/>
                    <input className={styles.inputField} type="text" placeholder={"Ваш email"}/>
                    <textarea className={styles.inputField} placeholder={"Ваше сообщение"} rows={5}></textarea>
                    <input className={styles.submitButton} type="submit"/>
                </form>
            </div>
        </div>

    );
};

