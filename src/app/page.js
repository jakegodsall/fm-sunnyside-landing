import Image from "next/image";

import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection/InfoSection";

import eggImage from "@images/mobile/image-transform.jpg";
import cupImage from "@images/mobile/image-stand-out.jpg";

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
            />
            <InfoSection
                title="Stand out to the right audience"
                description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
                image={cupImage}
                alt="cup"
            />
        </main>
    );
}
