import ServiceSection from "./ServiceSection";

// Mobile Images
import cherryImageMobile from "@images/mobile/image-graphic-design.jpg";
import orangeImageMobile from "@images/mobile/image-photography.jpg";

// Desktop Images
import cherryImageDesktop from "@images/desktop/image-graphic-design.jpg";
import orangeImageDesktop from "@images/desktop/image-photography.jpg";

export default function ServiceGrid() {
    return (
        <>
            <section className="flex flex-col sm:hidden sm:min-h-[38rem]">
                <ServiceSection
                    image={cherryImageMobile}
                    alt="cherries"
                    title="Graphic Design"
                    description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
                    textColor="text-[#24554A]"
                />
                <ServiceSection
                    image={orangeImageMobile}
                    alt="orange"
                    title="Photography"
                    description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                    textColor="text-[#19536C]"
                />
            </section>
            <section className="hidden w-full flex-row sm:flex sm:min-h-[38rem]">
                <ServiceSection
                    image={cherryImageDesktop}
                    alt="cherries"
                    title="Graphic Design"
                    description="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
                    textColor="text-[#24554A]"
                />
                <ServiceSection
                    image={orangeImageDesktop}
                    alt="orange"
                    title="Photography"
                    description="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
                    textColor="text-[#19536C]"
                />
            </section>
        </>
    );
}
