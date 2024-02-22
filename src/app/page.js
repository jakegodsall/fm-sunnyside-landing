import Image from "next/image";

import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection/InfoSection";

import eggImage from "@images/mobile/image-transform.jpg";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <Hero />
            <InfoSection
                title="Transform your brand"
                description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                image={eggImage}
            />
        </main>
    );
}
