import Image from "next/image";
import clsx from "clsx";

export default function InfoSection({
    title,
    description,
    image,
    alt,
    bgColor,
    reverse,
}) {
    return (
        <section className="grid w-full grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
            <div className="relative">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div
                className={clsx(
                    "flex w-full flex-col items-center bg-white px-[2.4rem] py-[5rem] text-center sm:flex sm:flex-col sm:justify-center sm:px-0 sm:text-left",
                    reverse ? "sm:row-start-1" : "",
                )}
            >
                <div className="max-w-[34rem] ">
                    <h2 className="mb-[2.4rem] font-serif text-[3.2rem] sm:mx-[6rem] ">
                        {title}
                    </h2>
                    <p className="mb-[3.2rem] font-sans text-[1.8rem] text-grey sm:mx-[6rem]">
                        {description}
                    </p>
                    <a
                        href="#"
                        className="relative z-20 mb-[6rem] inline items-center self-start font-serif text-[1.5rem] uppercase sm:mx-[6rem]"
                    >
                        Learn More
                        <div
                            className={`relative right-[1rem] top-[-1rem] h-[1rem] w-full rounded-[2.8rem] ${bgColor} w-[120%] opacity-25 hover:opacity-80`}
                        ></div>
                    </a>
                </div>
            </div>
        </section>
    );
}
