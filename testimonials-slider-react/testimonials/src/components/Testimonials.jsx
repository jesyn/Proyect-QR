import React, {useState } from 'react';
import styles from './Testimonials.module.scss'
import info from "../db/testimonials.json";
import Button from './Button';
import ImgBackground from './Background/ImgBackground';
import Quotes from './Background/Quotes';
import Curve from './Background/Curve';

function Testimonials() {

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const goToPreviousTestimonial = () => {
        const isFirstTestimonial = currentTestimonial === 0;
        const newTestimonial = isFirstTestimonial ? info.length -1 : currentTestimonial -1;
        setCurrentTestimonial(newTestimonial);
        console.log("previo", newTestimonial)

    }

    const goToNextTestimonial = () => {
        const isLastTestimonial = currentTestimonial === info.length -1;
        const newTestimonial = isLastTestimonial ? 0 : currentTestimonial + 1;
        setCurrentTestimonial(newTestimonial);
        console.log("proximo", newTestimonial)
    }

    return (
        <>
            <section key={info[currentTestimonial].id} className={styles.testimonials}>
                <div className={styles.container}>
                    
                    <div className={styles.img_container} >
                        <figure className={styles.portrait}>
                            <ImgBackground />
                            <img src={info[currentTestimonial].img} alt={info[currentTestimonial].alt_img} />
                            <nav className={styles.nav_button}>
                                <Button previousTestimonial={goToPreviousTestimonial} nextTestimonial={goToNextTestimonial} />
                            </nav>
                        </figure>
                    </div>

                    <div className={styles.info_container}>
                        <Quotes />
                        <p className={styles.bio}> {info[currentTestimonial].info} </p>
                        <div className={styles.personal_data}>
                            <h3 className={styles.name} > {info[currentTestimonial].name} </h3>
                            <h4 className={styles.profession} > {info[currentTestimonial].profession} </h4>
                        </div>
                    </div>

                </div>
            </section>
            
            <Curve />
            
        </>
    )
}

export default Testimonials;