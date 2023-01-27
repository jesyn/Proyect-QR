import React from 'react';
import styles from './Testimonials.module.scss'
import info from "../db/testimonials.json";

function Testimonials() {
    return (
        <>
        {info.map((testimonial) => {
            return  <div key={testimonial.id} /* className={styles.container} */>
                        <img src={testimonial.img} alt={testimonial.alt_img} />
                        <button> pasar </button>
                        <p /* className={styles.bio} */> {testimonial.info} </p>
                        <h3 /* className={styles.name} */> {testimonial.name} </h3>
                        <h4 /* className={styles.profession} */> {testimonial.profession} </h4>
                    </div>
                    })
        }
        </>
    )
}

export default Testimonials