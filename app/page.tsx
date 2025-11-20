import About from "../components/About";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Testimonial from "../components/Testimonial";
import Clients from "../components/Clients";
// import Blog from "../components/Blog";
import Portfolio from "../components/Portfolio";
import Connect from "../components/Connect";
import BackgroundDecorationalLines from "../components/BackgroundDecorationalLines";
// import Map from "@/components/Map";
import Navigation from "@/components/Navigation";

export default function Home() {
    return (
        <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
            {/* Nav */}
            <Navigation />

            {/* Sections */}
            <div className="lg:w-3/4 space-y-6 pb-12">
                {/* About */}
                <About />

                {/* Services */}
                <Services />

                {/* Portfolio */}
                <Portfolio />

                {/* Testimonial */}
                <Testimonial />

                {/* Resume */}
                <Resume />

                {/* Clients */}
                <Clients />

                {/* Contact */}
                <Connect />

                {/* Map */}
                {/* <Map /> */}
            </div>
        </div>
    );
}
