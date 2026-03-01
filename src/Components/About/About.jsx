import React from "react";
import styles from "./about.module.css";
import exo from '../../assets/images/exwaliser.svg'
import rectangle from '../../assets/images/rectangle.svg'
import gallery1 from '../../assets/images/gallery-1.png'

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>

                {/* LEFT TEXT BLOCK */}
                <div className={styles.textBlock}>
                    <div className={styles.titleRow}>
                        <img src="/icon-sound.svg" alt="" className={styles.icon} />
                        <h2 className={styles.title}>Bright Lights</h2>
                    </div>

                    <p className={styles.text}>
                        Bright Lights is a multi-Grammy nominated singer, songwriter, DJ and record producer.
                        She has written for numerous pop stars including Britney Spears, Justin Bieber,
                        Usher and Beyoncé. Her catalog has amassed over 1 billion streams worldwide.
                        More than 100 million of those streams can be attributed to her artist career and
                        include such hits as Porter Robinson's "Language," 3LAU's "How You Love Me"
                        and her own single "Runaway." She was also a featured vocalist on Zedd's #1
                        Clarity album. Her latest music video, "Put It Down," reached 1 million
                        streams in the first week, releasing independently. Bright Lights is currently
                        in the studio working on a self-produced album slated for release in 2020.
                    </p>

                    {/* INFO CARDS */}
                    <div className={styles.infoGrid}>
                        <div className={styles.infoCard}>Based in: Los Angeles</div>
                        <div className={styles.infoCard}>Founded in 2011</div>
                        <div className={styles.infoCard}>Genre: #DancePop</div>
                        <div className={styles.infoCard}>Label: 333 Recordings</div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className={styles.imageWrap}>
                    <img src={gallery1} alt="artist" className={styles.image} />
                </div>

            </div>
        </section>
    );
};

export default About;