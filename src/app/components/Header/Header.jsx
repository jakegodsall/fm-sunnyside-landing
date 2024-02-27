import Image from "next/image";

import logo from "@images/logo.svg";
import HamburgerButton from "../UI/HamburgerButton/HamburgerButton";

export default function Header() {
    return (
        <header className="absolute z-20 flex w-full items-center justify-between px-[2rem] pb-[8.8rem] pt-[4rem]">
            <Image src={logo} alt="logo" width={124} height={24} />
            <HamburgerButton />
        </header>
    );
}
