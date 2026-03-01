import './App.css';
import Hero from "./Components/Hero/Hero.jsx";
import Releases from "./Components/Releases/Releases.jsx";
import LastTracks from "./Components/LastTracks/LastTracks.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import About from "./Components/About/About.jsx";
import Testimonial from "./Components/Testimonial/Testimonial.jsx";
import TourDates from "./Components/TourDates/TourDates.jsx";

function App() {

    return (
        <>
            <Hero />
            <Releases />
            <About/>
            <Testimonial />
            <LastTracks />
            <Gallery />
            <TourDates/>
            <Footer />
        </>
    )
}

export default App
