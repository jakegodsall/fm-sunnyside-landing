import Image from "next/image";

// Hero Section
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

// Info Section
import InfoSection from "./components/MainSections/InfoSection/InfoSection";
import eggImage from "@images/mobile/image-transform.jpg";
import cupImage from "@images/mobile/image-stand-out.jpg";

// Service Section
import ServiceSection from "./components/MainSections/ServiceSection/ServiceSection";
import cherryImage from "@images/mobile/image-graphic-design.jpg";
import orangeImage from "@images/mobile/image-photography.jpg";
import TestimonialSection from "./components/MainSections/TestimonialSection/TestimonialSection";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Footer from "./components/Footer/Footer";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <Hero />
            <InfoSection
                title="Transform your brand"
                description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                image={eggImage}
                alt="egg"
                bgColor="bg-[#FAD400]"
            />
            <InfoSection
                title="Stand out to the right audience"
                description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
                image={cupImage}
                alt="cup"
                bgColor="bg-[#FE7766]"
            />
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
