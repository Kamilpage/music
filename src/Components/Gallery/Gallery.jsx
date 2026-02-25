import React from 'react';
import styles from './gallery.module.css'
import gallery5 from '../../assets/images/gallery-5.png'
import gallery6 from '../../assets/images/gallery-6.png'
import gallery7 from '../../assets/images/gallery-7.png'
import gallery8 from '../../assets/images/gallery-8.png'
import gallery9 from '../../assets/images/gallery-9.png'
import gallery10 from '../../assets/images/gallery-10.png'
import gallery11 from '../../assets/images/gallery-11.png'
import gallery12 from '../../assets/images/gallery-12.png'
import {useEffect, useRef, useState} from "react";
import Glide from '@glidejs/glide';

const Gallery = () => {
    const [concerts] = useState([
        {image: gallery10, title: 'Chandler, AZ', address: 'The Park at Wild Horse Pass', date: 'Apr 02 2021'},
        {image: gallery11, title: 'Ibiza, IBZ', address: 'Swag Ibiza Club', date: 'Jul 08 2021'},
        {image: gallery12, title: 'Ibiza, IBZ', address: 'El Swing Ibiza', date: 'Jul 10 2021'}])

    const glideRef = useRef(null);
    const glideInstance = useRef(null);

    useEffect(() => {
        glideInstance.current = new Glide(glideRef.current, {
            type: 'carousel',      // 'slider' или 'carousel'
            startAt: 0,
            perView: 3,
            gap: 16,
            breakpoints: {
                1024: {perView: 2},
                600: {perView: 1}
            }
        });

        glideInstance.current.mount();

        return () => {
            glideInstance.current && glideInstance.current.destroy();
        };
    }, []);

    return (
        <section className={styles.gallery}>
            <div className='container'>
                <div className={styles.gallery__inner}>
                    <div className={styles.gallery__grid}>
                        <img src={gallery5} alt="gallery"/>
                        <div className={styles.grid__inner}>
                            <div className={styles.grid__inner2}>
                                <img src={gallery6} alt="gallery"/>
                                <img src={gallery7} alt="gallery"/>
                            </div>
                            <img src={gallery8} alt="gallery"/>
                        </div>
                        <img src={gallery9} alt="gallery"/>
                    </div>
                    <div className="glide" ref={glideRef}>
                        <div className="glide__track" data-glide-el="track">
                            <div className={`${styles.concert__events} glide__slides`}>
                                {concerts.map((concert, index) => (
                                    <div className={`${styles.concert__item} glide__slide`} key={index}>
                                        <img src={concert.image} alt={concert.title}/>
                                        <div className={styles.event__details}>
                                            <h2>{concert.title}</h2>
                                            <h3>{concert.address}</h3>
                                            <p>{concert.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div data-glide-el="controls">
                                <button data-glide-dir="<">Prev</button>
                                <button data-glide-dir=">">Next</button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>


        </section>
    );
};

export default Gallery;