import React from "react";
import styles from "./hero.module.css";

import logo from "../../assets/images/logo-1.png";
import logo2 from "../../assets/images/logo-2.png";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay} />

            {/* HEADER */}
            <header className={styles.header}>
                <div className={styles.logoBlock}>
                    <img src={logo} alt="logo" className={styles.logo} />
                    <img src={logo2} alt="logo" className={styles.logo} />
                </div>

                <nav className={styles.nav}>
                    <a href="#">About</a>
                    <a href="#">News</a>
                    <a href="#">Music</a>
                    <a href="#">Media</a>
                    <a href="#">Tours</a>
                    <a href="#">Contacts</a>
                </nav>
            </header>

            {/* HERO CONTENT */}
            <div className={styles.content}>
                <h4 className={styles.subtitle}>New Single</h4>
                <h1 className={styles.title}>War For Love</h1>

                <div className={styles.audioLine}>
                    <div className={styles.playBtn}>
                        <span>▶</span>
                    </div>

                    <div className={styles.timeline}></div>

                    <span className={styles.time}>00:22–02:54</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;