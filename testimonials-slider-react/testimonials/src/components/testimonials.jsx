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
                            {/* fondo imagen */} {/* <div className={styles.img_background}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="697" height="657"><defs><linearGradient id="a" x1="31.368%" x2="100%" y1="70.497%" y2="22.772%"><stop offset="0%" stop-color="#9975D0"/><stop offset="100%" stop-color="#4A3FDB"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#a)" d="M233.996 231.082c-62.714 60.37 48.746 169.37 176.07 259.677 127.324 90.307 187.825 151.88 269.763 73.005 81.938-78.874 114.518-247.228 0-332.682-114.518-85.453-383.12-60.369-445.833 0z" transform="matrix(0 1 1 0 97 -97)"/><path fill="#F4F4FC" d="M14.885 304.531c-51.873-49.833 40.32-139.81 145.634-214.355C265.833 15.63 315.877-35.197 383.651 29.912c67.774 65.108 94.722 204.08 0 274.62-94.722 70.539-316.893 49.832-368.766 0z"/><g stroke="#D3629D" stroke-width="4"><path d="M344 45.087L364.087 25l20.088 20.087L404.262 25l20.088 20.087L444.437 25"/><path d="M344 63.087L364.087 43l20.088 20.087L404.262 43l20.088 20.087L444.437 43"/><path d="M344 81.087L364.087 61l20.088 20.087L404.262 61l20.088 20.087L444.437 61"/><path d="M344 99.087L364.087 79l20.088 20.087L404.262 79l20.088 20.087L444.437 79"/></g><path fill="#CF6BCB" d="M667 640a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm0-22a3 3 0 110 6 3 3 0 010-6zm176 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm-22 0a3 3 0 110 6 3 3 0 010-6zm0-22a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm-176 0a3 3 0 110 6 3 3 0 010-6zm22-22a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm22 0a3 3 0 110 6 3 3 0 010-6zm-176 0a3 3 0 110 6 3 3 0 010-6z"/></g></svg>
                            </div> */}
                            
                            <img src={info[currentTestimonial].img} alt={info[currentTestimonial].alt_img} />
                            <nav className={styles.nav_button}>
                                <Button previousTestimonial={goToPreviousTestimonial} nextTestimonial={goToNextTestimonial} />
                            </nav>
                        </figure>
                    </div>

                    <div className={styles.info_container}>
                        {/* imagen comillas */} {/* <svg xmlns="http://www.w3.org/2000/svg" width="120" height="100"><defs><linearGradient id="a" x1="31.368%" x2="100%" y1="72.917%" y2="19.557%"><stop offset="0%" stop-color="#9975D0"/><stop offset="100%" stop-color="#4A3FDB"/></linearGradient></defs><path fill="url(#a)" fill-rule="evenodd" d="M52.615 0L24.858 100H0V0h52.615zM120 0L92.243 100H67.385V0H120z" opacity=".15"/></svg> */}
                        <p className={styles.bio}> {info[currentTestimonial].info} </p>
                        <div className={styles.personal_data}>
                            <h3 className={styles.name} > {info[currentTestimonial].name} </h3>
                            <h4 className={styles.profession} > {info[currentTestimonial].profession} </h4>
                        </div>
                    </div>

                </div>
            </section>
            
            {/* montaña footer */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="610" height="154" className={styles.img_footer}><path fill="#F4F4FC" fill-rule="evenodd" d="M610 154C469.493 123.42 358.432 86.087 276.818 42S102.93-11.42 0 14v140h610z"/></svg> */}
            
        </>
    )
}

export default Testimonials;