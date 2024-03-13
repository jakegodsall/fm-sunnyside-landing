import Image from "next/image";

// Hero Section
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import TestimonialSection from "./components/MainSections/TestimonialSection/TestimonialSection";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Footer from "./components/Footer/Footer";
import InfoGrid from "./components/MainSections/InfoSection/InfoGrid";
import ServiceGrid from "./components/MainSections/ServiceSection/ServiceGrid";

export default function Home() {
    return (
        <main className="flex w-full max-w-[100rem] flex-col items-center">
            <Header />
            <Hero />
            <InfoGrid />
            <ServiceGrid />
            <TestimonialSection />
            <ImageGrid />
            <Footer />
        </main>
    );
}
