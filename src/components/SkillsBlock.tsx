import React from 'react';
import styles from './SkillsBlock.module.css'
import {SkillCard} from "./SkillCard";

export const SkillsBlock = () => {
    return (
        <div className={styles.block}>
            <div className={styles.blockContent}>
                <h2 className={styles.blockHeader}>Мои навыки</h2>
                <div className={styles.skillBox}>
                    <SkillCard name={"React"}/>
                    <SkillCard name={"JavaScript"}/>
                    <SkillCard name={"NodeJS"}/>
                    <SkillCard name={"NodeJS"}/>
                    <SkillCard name={"NodeJS"}/>
                    <SkillCard name={"NodeJS"}/>
                    <SkillCard name={"NodeJS"}/>
                </div>

            </div>


        </div>
    );
};

