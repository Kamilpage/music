import React, {useEffect, useRef, useState} from 'react';
import styles from './tracks.module.css'
import gallery4 from '../../assets/images/gallery-4.png'
import exo from '../../assets/images/exwaliser.svg'
import spotify from '../../assets/images/spotify.svg'
import iTunes from '../../assets/images/iTunes.svg'
import MiniPlayer from "../Music/Music.jsx";

const Tracks = () => {
    const [tracks] = React.useState(['3LAU, Bright Lights — How You Love Me', 'Bright Lights, Kaleena Zanders, Kandy — War For Love', 'Pink Is Punk, Benny Benassi, Bright Lights — Ghost', 'Hardwell, Dyro, Bright Lights — Never Say Goodbye', 'Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now', 'Zedd, Bright Lights — Follow You Down'])
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            {threshold: 0.25}
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.tracks} ref={sectionRef}>
            <div className='container'>
                <div className={styles.tracks__inner}>
                    <div className={`${styles.tracks__left} ${'animate__animated'} ${isVisible ? 'animate__fadeInTopLeft' : ''}`}>
                        <img src={gallery4} alt="gallery-4"/>
                    </div>
                    <div className={`${styles.tracks__right} ${'animate__animated'} ${isVisible ? 'animate__fadeInTopRight' : ''}`}>
                        <div className={styles.tracks__head}>
                            <img src={exo} alt=""/>
                            <h1>Last tracks</h1>
                        </div>
                        <div>
                            <MiniPlayer tracks={tracks} />
                        </div>
                        <div className={styles.tracks__block}>
                            {tracks.map((track, i) => (
                                <div key={i} className={styles.tracks__item}>
                                    <p>
                                        {i}
                                    </p>
                                    <a href="#">{track}</a>
                                </div>
                            ))}
                            <div className={styles.follow_me}>
                                <h2>Follow me:</h2>
                                <div className={styles.social_network}>
                                <img src={spotify} alt="spotify"/>
                                    <a href="#">Spotify</a>
                                </div>
                                <div className={styles.social_network}>
                                <img src={iTunes} alt="iTunes"/>
                                    <a href="#">iTunes</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tracks;