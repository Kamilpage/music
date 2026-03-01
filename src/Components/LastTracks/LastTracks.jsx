import React from "react";
import styles from './lastTracks.module.css'
import gallery4 from '../../assets/images/gallery-4.png'
import exo from '../../assets/images/exwaliser.svg'
import spotify from '../../assets/images/spotify.svg'
import iTunes from '../../assets/images/iTunes.svg'

const tracks = [
    "3LAU, Bright Lights — How You Love Me",
    "Bright Lights, Kaleena Zanders, Kandy — War For Love",
    "Pink Is Punk, Benny Benassi, Bright Lights — Ghost",
    "Hardwell, Dyro, Bright Lights — Never Say Goodbye",
    "Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now",
    "Zedd, Bright Lights — Follow You Down",
];

const LastTracks = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* LEFT CIRCLE IMAGE */}
                <div className={styles.circleWrapper}>
                    <div className={styles.circle}>
                        <img src={gallery4} alt="DJ" className={styles.image} />
                    </div>
                </div>

                {/* RIGHT TRACKS BLOCK */}
                <div className={styles.right}>
                    <div className={styles.headerRow}>
                        <div className={styles.titleRow}>
                            <img src={exo} className={styles.icon} alt="" />
                            <h2 className={styles.title}>Last tracks</h2>
                        </div>

                        <div className={styles.playerRow}>
                            <button className={styles.playBtn}>▶</button>
                            <div className={styles.timeline} />
                            <span className={styles.time}>00:47–03:30</span>
                        </div>
                    </div>

                    {/* TRACK LIST */}
                    <ul className={styles.list}>
                        {tracks.map((t, i) => (
                            <li key={i}>
                <span className={styles.index}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                                <span className={styles.trackName}>{t}</span>
                            </li>
                        ))}
                    </ul>

                    {/* FOLLOW ME */}
                    <div className={styles.follow}>
                        <span className={styles.followText}>Follow me:</span>

                        <div className={styles.icons}>
                            <img src={spotify} alt="spotify" />
                            <img src={iTunes} alt="itunes" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LastTracks;