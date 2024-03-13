import Image from "next/image";

// Mobile Images
import milkbottlesMobile from "@images/mobile/image-gallery-milkbottles.jpg";
import orangeMobile from "@images/mobile/image-gallery-orange.jpg";
import coneMobile from "@images/mobile/image-gallery-cone.jpg";
import sugarCubesMobile from "@images/mobile/image-gallery-sugar-cubes.jpg";

// Desktop Images
import milkbottlesDesktop from "@images/desktop/image-gallery-milkbottles.jpg";
import orangeDesktop from "@images/desktop/image-gallery-orange.jpg";
import coneDesktop from "@images/desktop/image-gallery-cone.jpg";
import sugarCubesDesktop from "@images/desktop/image-gallery-sugarcubes.jpg";

export default function ImageGrid() {
    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 sm:hidden">
                <Image src={milkbottlesMobile} alt="milk bottles" />
                <Image src={orangeMobile} alt="orange" />
                <Image src={coneMobile} alt="cone" />
                <Image src={sugarCubesMobile} alt="sugar cubes" />
            </div>
            <div className="hidden grid-cols-4 grid-rows-1 sm:grid">
                <Image src={milkbottlesDesktop} alt="milk bottles" />
                <Image src={orangeDesktop} alt="orange" />
                <Image src={coneDesktop} alt="cone" />
                <Image src={sugarCubesDesktop} alt="sugar cubes" />
            </div>
        </>
    );
}
