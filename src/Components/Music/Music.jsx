// MiniPlayer.jsx
import React, { useRef, useState, useEffect } from "react";
import './music.css'

export default function MiniPlayer({ tracks = [] }) {
    const audioRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // 0..100
    const [volume] = useState(0.8);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = volume;
        const onTime = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };
        const onEnd = () => {
            handleNext();
        };
        audio.addEventListener("timeupdate", onTime);
        audio.addEventListener("ended", onEnd);
        return () => {
            audio.removeEventListener("timeupdate", onTime);
            audio.removeEventListener("ended", onEnd);
        };
    }, [index, volume]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.src = tracks[index]?.src || "";
        if (playing) {
            // play() возвращает промис — обработаем возможную ошибку автоплейа
            audio.play().catch(() => setPlaying(false));
        } else {
            audio.pause();
        }
    }, [index, tracks, playing]);

    function togglePlay() {
        setPlaying(p => !p);
        const audio = audioRef.current;
        if (!audio) return;
        if (!playing) {
            audio.play().catch(() => setPlaying(false));
        } else {
            audio.pause();
        }
    }

    function handleSeek(e) {
        const rect = e.target.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const pct = clickX / rect.width;
        const audio = audioRef.current;
        if (audio.duration) {
            audio.currentTime = pct * audio.duration;
        }
    }

    function handleNext() {
        setIndex(i => (i + 1) % tracks.length);
        setPlaying(true);
    }


    return (
        <div className="mini-player" >
            <audio ref={audioRef} preload="metadata" />
            <div className='player__control'>
                <button onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
                    {playing ? "\u23F8\uFE0E" : "\u25B6\uFE0E"}
                </button>

                    <div>
                        {tracks[index]?.title || "No track"}
                    </div>
                    <div
                        role="progressbar"
                        aria-valuenow={Math.round(progress)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        onClick={handleSeek}
                        className='progress-bar'

                    >
                        <div style={{
                            width: `${progress}%`,
                            height: "100%",
                            borderRadius: 6,
                            background: "#4a90e2"
                        }} />
                    </div>


            </div>
        </div>
    );
}
