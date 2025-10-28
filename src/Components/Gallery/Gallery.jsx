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
    const [concerts] = React.useState([
        {image: gallery10, title: 'Chandler, AZ', address: 'The Park at Wild Horse Pass', date: 'Apr 02 2021'},
        {image: gallery11, title: 'Ibiza, IBZ', address: 'Swag Ibiza Club', date: 'Jul 08 2021'},
        {image: gallery12, title: 'Ibiza, IBZ', address: 'El Swing Ibiza', date: 'Jul 10 2021'}])
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

                    <div className={styles.concert__events}>
                        {concerts.map((concert, index) => (
                            <div className={styles.concert__item} key={index}>
                                <img src={concert.image} alt={concert.title}/>
                                <div className={styles.event__details}>
                                <h2>{concert.title}</h2>
                                <h3>{concert.address}</h3>
                                <p>{concert.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>


        </section>
    );
};

export default Gallery;