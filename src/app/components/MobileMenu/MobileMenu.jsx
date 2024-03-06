import { motion } from "framer-motion";
import clsx from "clsx";

export default function MobileMenu() {
    const containerVariant = {
        in: { width: 0, height: 0 },
        visible: {
            width: "330px",
            height: "330px",
            padding: "40px",
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
        out: {
            width: 0,
            height: 0,
            padding: 0,
            transition: { duration: 0.5, delay: 0.3 },
        },
    };

    const triangleVariant = {
        in: { opacity: 0, top: 0 },
        visible: {
            opacity: 1,
            top: "-24px",
            transition: {
                delay: 0.3,
                duration: 0.2,
                ease: "easeInOut",
            },
        },
        out: { opacity: 0, top: 0, transition: { delay: 0.3, duration: 0.2 } },
    };

    const contentVariant = {
        in: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.3,
            },
        },
        out: { opacity: 0 },
    };

    const triangle =
        "absolute right-0 h-[2.4rem] w-[2.4rem] border-l-[2.4rem] border-l-transparent border-b-[2.4rem] border-white";

    return (
        <>
            <motion.div
                variants={containerVariant}
                initial="in"
                animate="visible"
                exit="out"
                className={clsx(
                    "fixed top-[12rem] z-30 flex flex-col items-center border-b-white bg-white text-center",
                )}
            >
                <motion.div
                    initial="in"
                    animate="visible"
                    exit="out"
                    variants={triangleVariant}
                    className={triangle}
                ></motion.div>
                <motion.nav
                    variants={contentVariant}
                    initial="in"
                    animate="visible"
                    exit="out"
                >
                    <ul className="mb-[4.8rem] flex flex-col gap-[3.2rem]">
                        <li className="font-sans text-[2rem] text-grey">
                            About
                        </li>
                        <li className="font-sans text-[2rem] text-grey">
                            Services
                        </li>
                        <li className="font-sans text-[2rem] text-grey">
                            Projects
                        </li>
                    </ul>
                    <button className="rounded-full bg-[#fbd600] px-[3rem] py-[1.5rem] font-serif text-[1.5rem] font-bold uppercase">
                        Contact
                    </button>
                </motion.nav>
            </motion.div>
        </>
    );
}
