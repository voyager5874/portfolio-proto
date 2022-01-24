import React from 'react';
import styles from './ProjectsBlock.module.css'
import {ProjectCard} from "./ProjectCard";

export const ProjectsBlock = () => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.projectBlockContentWrapper}>
                <h2 className={styles.blockHeader}>Мои работы</h2>
                <div className={styles.projectBox}>
                    <ProjectCard name={"Social Network"}/>
                    <ProjectCard name={"Simple todo list App"}/>
                    <ProjectCard name={"Simple todo list App"}/>
                    <ProjectCard name={"Simple todo list App"}/>
                </div>

            </div>


        </div>
    );
};
