import React from "react";
import release1 from "../../assets/images/petProjects-1.png";
import release2 from "../../assets/images/petProjects-2.png";
import release3 from "../../assets/images/petProjects-3.png";
import styles from './releases.module.css'


const releases = [
    {
        id: 1,
        img: release1,
        text: "Working on my upcoming full-length album that's releasing later this year.",
    },
    {
        id: 2,
        img: release2,
        text: "Halloween vibes. Listen my new track!",
    },
    {
        id: 3,
        img: release3,
        text: "WarForLove is OUT NOW!! Stream it here!",
    },
];

const Releases = () => {
    return (
        <section className={styles.releases}>
            <div className={styles.list}>
                {releases.map((item) => (
                    <div className={styles.card} key={item.id}>
                        <img src={item.img} alt="" className={styles.image} />

                        <div className={styles.textBlock}>
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Releases;