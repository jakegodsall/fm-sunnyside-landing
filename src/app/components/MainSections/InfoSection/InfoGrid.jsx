import InfoSection from "./InfoSection";

// Info Section
import eggImage from "@images/mobile/image-transform.jpg";
import cupImage from "@images/mobile/image-stand-out.jpg";

export default function InfoGrid() {
    return (
        <section className="flex flex-col">
            <InfoSection
                title="Transform your brand"
                description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                image={eggImage}
                alt="egg"
                bgColor="bg-[#FAD400]"
                reverse={true}
            />
            <InfoSection
                title="Stand out to the right audience"
                description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
                image={cupImage}
                alt="cup"
                bgColor="bg-[#FE7766]"
                reverse={false}
            />
        </section>
    );
}
