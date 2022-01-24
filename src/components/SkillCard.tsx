import React from 'react';
import styles from './SkillCard.module.css'

type SkillType = {
    name: string
}

export const SkillCard = (props: SkillType) => {

    return (
        <div className={styles.skillCard}>
            <div className={styles.techSign}></div>

            <h3 className={styles.techName}>{props.name}</h3>
            <p className={styles.techDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                fringilla neque vel augue consequat,
                sed ultricies quam porta. Praesent iaculis cursus nisl, eget imperdiet leo ultrices ut. Etiam fermentum,
                velit a finibus condimentum, libero ante volutpat magna, sed finibus urna nunc ut leo. Sed iaculis
                imperdiet lorem et aliquet. Aliquam ac ex quam. Praesent ut lectus nunc. Cras erat diam, volutpat non
                eros eu, iaculis rutrum risus. Nullam nec rhoncus turpis.
            </p>


        </div>
    );
};

