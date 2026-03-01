import gallery5 from '../../assets/images/gallery-5.png'
import gallery6 from '../../assets/images/gallery-6.png'
import gallery7 from '../../assets/images/gallery-7.png'
import gallery8 from '../../assets/images/gallery-8.png'
import gallery9 from '../../assets/images/gallery-9.png'

import React from "react";
import styles from "./gallery.module.css";

const images = [
    gallery5, gallery6, gallery7, gallery8, gallery9
];

const Gallery = () => {
    return (
        <section className={styles.gallery}>
            <div className={styles.grid}>
                {images.map((src, i) => (
                    <div key={i} className={styles.card}>
                        <img src={src} alt={`gallery-${i}`} className={styles.image} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;