import React from 'react';
import styles from './Quotes.module.scss';

function Quotes() {
    return (
        <>
        <div className={styles.quotes_container} >
            <figure className={styles.img_quotes}></figure>
        </div>
    </>
    )
}

export default Quotes;