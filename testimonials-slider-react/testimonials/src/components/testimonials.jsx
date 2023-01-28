import React, {useState } from 'react';
import styles from './Testimonials.module.scss'
import info from "../db/testimonials.json";
import Button from './Button';

function Testimonials() {

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const goToPreviousTestimonial = () => {
        const isFirstTestimonial = currentTestimonial === 0;
        const newTestimonial = isFirstTestimonial ? info.length -1 : currentTestimonial -1;
        setCurrentTestimonial(newTestimonial);

    }

    const goToNextTestimonial = () => {
        const isLastTestimonial = currentTestimonial === info.length -1;
        const newTestimonial = isLastTestimonial ? 0 : currentTestimonial + 1;
        setCurrentTestimonial(newTestimonial);
        
        /* console.log("logitud", info.length-1, "actual", currentTestimonial);
        console.log("es el ultimo", isLastTestimonial);
        console.log("nuevo", newTestimonial); */
    }

    return (
        <>
        {/* {info.map((testimonial) => { */}
            <section key={info[currentTestimonial].id} className={styles.Testimonials}>
                <div className={styles.container} >
                    <figure className={styles.portrait}>
                        <img src={info[currentTestimonial].img} alt={info[currentTestimonial].alt_img} />
                        <nav className={styles.nav_button}>
                            <Button previousTestimonial={goToPreviousTestimonial} nextTestimonial={goToNextTestimonial} />
                        </nav>
                    </figure>
                    <p className={styles.bio}> {info[currentTestimonial].info} </p>
                    <h3 className={styles.name} > {info[currentTestimonial].name} </h3>
                    <h4 className={styles.profession} > {info[currentTestimonial].profession} </h4>
                </div>
            </section>
        </>
    )
}

export default Testimonials;