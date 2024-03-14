"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import arrowIcon from "@images/icon-arrow-down.svg";

export default function Hero() {
    function scrollDown() {
        console.log("arrow is clicked");
        const viewportHeight = window.innerHeight;
        window.scrollBy({
            top: viewportHeight,
            behavior: "smooth",
        });
    }

    return (
        <section className="bg-fit relative bottom-0 flex h-[100vh] w-screen flex-col items-center bg-hero-bg-mobile bg-cover bg-bottom bg-no-repeat sm:bg-hero-bg-desktop">
            <h1 className="mb-[5.2rem] mt-[14.4rem] text-center font-serif text-[4rem] uppercase tracking-[0.625rem] text-white sm:mt-[30rem]">
                We are creatives
            </h1>
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                <Image
                    src={arrowIcon}
                    alt="arrow icon"
                    width={30}
                    height={190}
                    className="relative top-[5rem] cursor-pointer"
                    onClick={scrollDown}
                />
            </motion.div>
        </section>
    );
}
