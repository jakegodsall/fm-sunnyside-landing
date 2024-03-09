import Image from "next/image";

import imageHeader from "@images/mobile/image-header.jpg";
import arrowIcon from "@images/icon-arrow-down.svg";

export default function Hero() {
    return (
        <section className="bg-hero-bg-mobile sm:bg-hero-bg-desktop bg-fit relative bottom-0 flex h-[100vh] w-screen flex-col items-center bg-cover bg-bottom bg-no-repeat">
            <h1 className="mb-[5.2rem] mt-[14.4rem] text-center font-serif text-[4rem] uppercase tracking-[0.625rem] text-white sm:mt-[30rem]">
                We are creatives
            </h1>
            <Image
                src={arrowIcon}
                alt="arrow icon"
                width={30}
                height={190}
                className="pb-[12rem]"
            />
        </section>
    );
}
