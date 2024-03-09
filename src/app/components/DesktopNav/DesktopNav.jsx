import Link from "next/link";

export default function DesktopNav() {
    return (
        <nav>
            <ul className="flex gap-[4.7rem]">
                <li>
                    <Link
                        href="#"
                        className="font-sans text-[1.8rem] text-white"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="font-sans text-[1.8rem] text-white"
                    >
                        Services
                    </Link>
            </li>
                <li>
                    <Link
                        href="#"
                        className="font-sans text-[1.8rem] text-white"
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="#"
                        className="rounded-full bg-[#77cdf5] px-[3.2rem] py-[1.6rem] font-serif text-[1.8rem] uppercase text-white"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
