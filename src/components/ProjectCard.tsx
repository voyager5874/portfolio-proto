import React from 'react';
import styles from './ProjectCard.module.css'

type ProjectCardType = {
    name: string
}

export const ProjectCard = (props: ProjectCardType) => {

    return (
        <div className={styles.projectCard}>
            <div className={styles.projectPic}>
                <button>Смотреть</button>
            </div>
            <div className={styles.textInfoWrapper}>
                <h3 className={styles.projectName}>{props.name}</h3>
                <p className={styles.projectDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    fringilla neque vel augue consequat,
                    sed ultricies quam porta. Praesent iaculis cursus nisl, eget imperdiet leo ultrices ut.
                </p>
            </div>
        </div>
    );
};

