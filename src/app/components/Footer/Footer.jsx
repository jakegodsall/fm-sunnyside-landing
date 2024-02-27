import Image from "next/image";

import logo from "@images/logo.svg";
import Link from "next/link";
import SocialsBar from "./SocialsBar";

export default function Footer() {
    return (
        <footer className="flex w-full flex-col items-center bg-green-background pb-[8rem] pt-[6.4rem]">
            <div className="text-green-text">
                <Image
                    src={logo}
                    alt="logo"
                    width={170}
                    height={33}
                    className="mb-[4rem] h-[3.3rem] w-[17rem] fill-green-text text-green-text"
                />
            </div>
            <nav>
                <ul className="mb-[8.6rem] flex gap-[6rem]">
                    <li className="font-sans text-[1.8rem] text-green-text">
                        <Link href="#">About</Link>
                    </li>
                    <li className="font-sans text-[1.8rem] text-green-text">
                        <Link href="#">Services</Link>
                    </li>
                    <li className="font-sans text-[1.8rem] text-green-text">
                        <Link href="#">Projects</Link>
                    </li>
                </ul>
            </nav>
            <SocialsBar />
        </footer>
    );
}
