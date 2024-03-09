import Image from "next/image";

// Hero Section
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

// Service Section
import ServiceSection from "./components/MainSections/ServiceSection/ServiceSection";
import cherryImage from "@images/mobile/image-graphic-design.jpg";
import orangeImage from "@images/mobile/image-photography.jpg";
import TestimonialSection from "./components/MainSections/TestimonialSection/TestimonialSection";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Footer from "./components/Footer/Footer";
import InfoGrid from "./components/MainSections/InfoSection/InfoGrid";

export default function Home() {
    return (
        <main className="flex max-w-[120rem] flex-col items-center">
            <Header />
            <Hero />
            <InfoGrid />
            <ServiceSection
                image={cherryImage}
                alt="cherries"
                title="Graphic Design"
                description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
                textColor="text-[#24554A]"
            />
            <ServiceSection
                image={orangeImage}
                alt="orange"
                title="Photography"
                description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                textColor="text-[#19536C]"
            />
            <TestimonialSection />
            <ImageGrid />
            <Footer />
        </main>
    );
}
