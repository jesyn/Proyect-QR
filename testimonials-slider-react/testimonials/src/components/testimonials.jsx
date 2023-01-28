import React from 'react';
import styles from './Testimonials.module.scss'
import info from "../db/testimonials.json";
import Button from './Button';

function Testimonials() {
    return (
        <>
        {info.map((testimonial) => {
            return  <section key={testimonial.id} className={styles.Testimonials}>
                        <div className={styles.container}>
                            <figure className={styles.portrait}>
                                <img src={testimonial.img} alt={testimonial.alt_img} />
                                <nav className={styles.nav_button}>
                                    <Button />
                                </nav>
                            </figure>
                            <p className={styles.bio}> {testimonial.info} </p>
                            <h3 className={styles.name} > {testimonial.name} </h3>
                            <h4 className={styles.profession} > {testimonial.profession} </h4>
                        </div>
                    </section>
                    })
        }
        </>
    )
}

export default Testimonials