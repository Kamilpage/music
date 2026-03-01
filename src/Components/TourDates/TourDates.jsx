import React from "react";
import styles from "./tourDates.module.css";
import tour1 from '../../assets/images/gallery-10.png'
import tour2 from '../../assets/images/gallery-11.png'
import tour3 from '../../assets/images/gallery-12.png'
const tours = [
    {
        id: 1,
        city: "Chandler, AZ",
        place: "The Park at Wild Horse Pass",
        date: "APR 02 2021",
        img: tour1,
    },
    {
        id: 2,
        city: "Ibiza, IBZ",
        place: "Swag Ibiza Club",
        date: "JUL 08 2021",
        img: tour2,
    },
    {
        id: 3,
        city: "Ibiza, IBZ",
        place: "El Swing Ibiza",
        date: "JUL 10 2021",
        img: tour3,
    },
];

const TourDates = () => {
    return (
        <section className={styles.tour}>
            <h2 className={styles.title}>Tour Dates</h2>

            <div className={styles.grid}>
                {tours.map((t) => (
                    <div key={t.id} className={styles.card}>
                        <img src={t.img} alt={t.city} className={styles.image} />

                        <div className={styles.content}>
                            <h4 className={styles.city}>{t.city}</h4>
                            <p className={styles.place}>{t.place}</p>
                            <p className={styles.date}>{t.date}</p>
                            <button className={styles.btn}>TICKETS</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TourDates;