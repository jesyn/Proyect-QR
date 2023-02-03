import React from 'react';
import styles from './Button.module.scss';

function Button({previousTestimonial, nextTestimonial}) {


    return (
        <button className={styles.button}> 
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" className={styles.arrow} onClick={previousTestimonial}><path fill="none" stroke="#8585AC" stroke-width="3" d="M11 1L3 9l8 8"/></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" 
            className="icon icon-tabler icon-tabler-chevron-left" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            strokeWidth="3" 
            stroke="#8585AC" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            onClick={previousTestimonial}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="15 6 9 12 15 18" />
            </svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18" className={styles.arrow} onClick={nextTestimonial}><path fill="none" stroke="#8585AC" stroke-width="3" d="M2 1l8 8-8 8"/></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" 
            className="icon icon-tabler icon-tabler-chevron-right" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            strokeWidth="3" 
            stroke="#8585AC" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            onClick={nextTestimonial}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <polyline points="9 6 15 12 9 18" />
            </svg>
        </button>
    )
}

export default Button