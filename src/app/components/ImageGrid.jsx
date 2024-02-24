import Image from "next/image";

import milkbottles from "@images/mobile/image-gallery-milkbottles.jpg";
import orange from "@images/mobile/image-gallery-orange.jpg";
import cone from "@images/mobile/image-gallery-cone.jpg";
import sugarCubes from "@images/mobile/image-gallery-sugar-cubes.jpg";

export default function ImageGrid() {
    return (
        <div className="grid grid-cols-2">
            <Image src={milkbottles} alt="milk bottles" />
            <Image src={orange} alt="orange" />
            <Image src={cone} alt="cone" />
            <Image src={sugarCubes} alt="sugar cubes" />
        </div>
    );
}
