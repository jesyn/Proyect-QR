import React from 'react';
import styles from './ImgBackgroud.module.scss'

function ImgBackground() {
    return (
        <>
            <div className={styles.background_container} >
                <figure className={styles.img_background}></figure>
            </div>
        </>
    )
}

export default ImgBackground