import Header from "./Components/Header";

import Hero from "./Components/Hero";
import FollowOnInstagram from "./Components/FollowOnInstagram";
import SpeacialAttractions from "./Components/SpeacialAttractions";
import Footer from "./Components/Footer";
import CopyRight from "./Components/CopyRight";
import OurPopularProduct from "./Components/OurPopularProduct";
import { Helmet } from "react-helmet-async";

function App() {
    return (
        <>
            <Helmet>
                <title>Home | Espresso Emporium</title>
            </Helmet>
            {/* Header */}
            <Header />

            {/* Hero */}
            <Hero />

            {/* Special Attractions */}
            <SpeacialAttractions />

            {/* Our Popular Products */}
            <OurPopularProduct />

            {/* Follow us on Instagram */}
            <FollowOnInstagram />

            {/* Footer */}
            <Footer />

            {/* CopyRight */}
            <CopyRight />
        </>
    );
}

export default App;
