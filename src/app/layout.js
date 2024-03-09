import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["600"],
    variable: "--font-barlow",
});
const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["900"],
    variable: "--font-fraunces",
});

export const metadata = {
    title: "Sunnyside Agency",
    description: "Sunnyside Agency Landing Page",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    "flex flex-col items-center",
                    barlow.variable,
                    fraunces.variable,
                )}
            >
                {children}
            </body>
        </html>
    );
}
