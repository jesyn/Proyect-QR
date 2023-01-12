import React from 'react';
import info from "./../db/testimonials.json";

function testimonials() {
    return (
        <>
        {info.map((testimonial) => {
            return  <div key={testimonial.id}>
                        <img src={testimonial.url} alt={testimonial.alt_img} />
                        <button> pasar </button>
                        <p> {testimonial.info} </p>
                        <p> {testimonial.name} </p>
                        <p> {testimonial.profession} </p>
                    </div>
                    })
        }
        </>
    )
}

export default testimonials