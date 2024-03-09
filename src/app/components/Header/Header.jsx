"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

import logo from "@images/logo.svg";
import HamburgerButton from "../UI/HamburgerButton/HamburgerButton";
import MobileMenu from "../MobileMenu/MobileMenu";
import DesktopNav from "../DesktopNav/DesktopNav";

export default function Header() {
    const [hamburgerActive, setHamburgerActive] = useState(false);

    const handleHamburgerClicked = () => {
        setHamburgerActive((prevState) => !prevState);
    };

    return (
        <>
            <header className="absolute z-20 flex w-full max-w-[120rem] items-center justify-between px-[2rem] pb-[8.8rem] pt-[4rem]">
                <Image src={logo} alt="logo" width={124} height={24} />
                <div className="sm:hidden">
                    <HamburgerButton
                        hamburgerActive={hamburgerActive}
                        setHamburgerActive={handleHamburgerClicked}
                    />
                </div>
                <div className="hidden sm:block">
                    <DesktopNav />
                </div>
            </header>
            <AnimatePresence>
                {hamburgerActive && <MobileMenu />}
            </AnimatePresence>
        </>
    );
}
