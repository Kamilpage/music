import React from "react";
import styles from "./testimonial.module.css";
import gallery2 from '../../assets/images/gallery-2.png'
import gallery3 from '../../assets/images/gallery-3.png'
const Testimonial = () => {
    return (
        <section className={styles.testimonial}>
            <div className={styles.container}>

                {/* LEFT QUOTE BOX */}
                <div className={styles.quoteBox}>
                    <p className={styles.quote}>
                        “In an age where mainstream music is designed to be as easily consumed as possible,
                        listening to Bright Lights is refreshing, to say the least. Her sound is perfect for
                        radio but complex enough to separate her from other pop newcomers.”
                    </p>

                    <div className={styles.sourceRow}>
                        <span className={styles.source}>PopULove.net</span>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className={styles.imageWrap}>
                    <img src={gallery2} alt="Artist" className={styles.image} />
                </div>

            </div>
        </section>
    );
};

export default Testimonial;