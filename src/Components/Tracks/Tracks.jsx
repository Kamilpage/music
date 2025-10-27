import React from 'react';
import styles from './tracks.module.css'
import gallery4 from '../../assets/images/gallery-4.png'
import exo from '../../assets/images/exwaliser.svg'
import player2 from '../../assets/images/player-2.png'
import spotify from '../../assets/images/spotify.svg'
import iTunes from '../../assets/images/iTunes.svg'

const Tracks = () => {
    const [tracks] = React.useState(['3LAU, Bright Lights — How You Love Me', 'Bright Lights, Kaleena Zanders, Kandy — War For Love', 'Pink Is Punk, Benny Benassi, Bright Lights — Ghost', 'Hardwell, Dyro, Bright Lights — Never Say Goodbye', 'Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now', 'Zedd, Bright Lights — Follow You Down'])

    return (
        <section className={styles.tracks}>
            <div className='container'>
                <div className={styles.tracks__inner}>
                    <div className={styles.tracks__left}>
                        <img src={gallery4} alt="gallery-4"/>
                    </div>
                    <div className={styles.tracks__right}>
                        <div className={styles.tracks__head}>
                            <img src={exo} alt=""/>
                            <h1>Last tracks</h1>
                        </div>
                        <div>
                            <img src={player2} alt="player-2"/>
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