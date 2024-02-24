import Image from "next/image";

// Socials Icons
import facebookLogo from "@images/icon-facebook.svg";
import instagramLogo from "@images/icon-instagram.svg";
import twitterLogo from "@images/icon-twitter.svg";
import pinterestLogo from "@images/icon-pinterest.svg";

export default function SocialsBar() {
    return (
        <ul className="flex gap-[2rem]">
            <li>
                <a href="#">
                    <Image
                        src={facebookLogo}
                        alt="facebook logo"
                        width={20}
                        height={20}
                    />
                </a>
            </li>
            <li>
                <a href="#">
                    <Image
                        src={instagramLogo}
                        alt="instagram logo"
                        width={20}
                        height={20}
                    />
                </a>
            </li>
            <li>
                <a href="#">
                    <Image
                        src={twitterLogo}
                        alt="twitter logo"
                        width={20}
                        height={20}
                    />
                </a>
            </li>
            <li>
                <a href="#">
                    <Image
                        src={pinterestLogo}
                        alt="pinterest logo"
                        width={20}
                        height={20}
                    />
                </a>
            </li>
        </ul>
    );
}
