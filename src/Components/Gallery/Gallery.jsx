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

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <div className='container'>
                <div className={styles.gallery__inner}>
                    <div className={styles.gallery__grid}>
                    <img src={gallery5} alt="gallery" />
                    <img src={gallery6} alt="gallery"/>
                    <img src={gallery7} alt="gallery"/>
                    <img src={gallery8} alt="gallery"/>
                    <img src={gallery9} alt="gallery"/>
                    </div>

                    <div className={styles.concert__events}>

                    </div>

                </div>

            </div>


        </section>
    );
};

export default Gallery;