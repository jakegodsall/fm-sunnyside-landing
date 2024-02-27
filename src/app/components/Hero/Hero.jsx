import Image from "next/image";

import imageHeader from "@images/mobile/image-header.jpg";
import arrowIcon from "@images/icon-arrow-down.svg";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center">
            <h1 className="mb-[5.2rem] text-center font-serif text-[4rem] uppercase tracking-[0.625rem] text-white">
                We are creatives
            </h1>
            <Image src={arrowIcon} alt="arrow icon" width={30} height={190} />
            <Image
                src={imageHeader}
                width={375}
                height={100}
                alt="Orange"
                className="absolute top-0 -z-10"
            />
        </section>
    );
}