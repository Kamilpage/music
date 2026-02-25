import React, {useEffect, useRef, useState} from "react";
import styles from "./hero.module.css";
import pet1 from "../../assets/images/petProjects-1.png";
import pet2 from "../../assets/images/petProjects-2.png";
import pet3 from "../../assets/images/petProjects-3.png";
import bg from "../../assets/images/main-bg.png";
import logo from "../../assets/images/logo-1.png";
import logo2 from "../../assets/images/logo-2.png";
import 'animate.css';
import MiniPlayer from "../Music/Music.jsx";
import song1 from '../../music/naruto.mp3'

export default function Hero() {
    const [petProjects] = useState([
        {image: pet1, title: "Working on my upcoming full-lenth album that`s releasing later this year."},
        {image: pet2, title: "Halloween vibes. Listen my new track!"},
        {image: pet3, title: "WarForLove is OUT NOW!! Stream it here!"},
    ]);

    const tracks = [
        { title: "Song 1", src: song1 },
        { title: "Song 2", src: "/audio/song2.mp3" },
    ];

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
        <div className={styles.main__div} ref={sectionRef}>
            <div className={styles.hero__bg}>
                <img src={bg} alt=""/>
            </div>

            <section className={styles.hero}>
                <div className="container">
                    <header className={styles.header}>
                        <div className={styles.header__inner}>
                            <div className={styles.logos}>
                                <img src={logo} alt="logo-1"/>
                                <img src={logo2} alt="logo-2"/>
                            </div>
                            <nav className={styles.header__nav}>
                                <div className={styles.header__links}>
                                    <a href="#">About</a>
                                    <a href="#">News</a>
                                    <a href="#">Music</a>
                                    <a href="#">Media</a>
                                    <a href="#">Tours</a>
                                    <a href="#">Contacts</a>
                                </div>
                            </nav>
                        </div>
                    </header>

                    <div className={styles.hero__inner}>
                        <div className={`${styles.hero__maintext} ${'animate__animated'} ${isVisible ? 'animate__fadeInUp' : ''}`}>
                            <h2>New Single</h2>
                            <h1>War For Love</h1>
                            <MiniPlayer tracks={tracks} />
                        </div>
                    </div>

                    <div className={styles.petProject__block}>
                        {petProjects.map((project, i) => (
                            <div
                                key={i}
                                className={`${styles.petProject} ${'animate__animated'} ${isVisible ? 'animate__fadeInUp' : ''}`}
                            >
                                <img src={project.image} alt=""/>
                                <p>{project.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
