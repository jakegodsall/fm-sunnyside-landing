import Image from "next/image";

export default function ServiceSection({
    image,
    alt,
    title,
    description,
    textColor,
}) {
    return (
        <section className="relative flex min-h-[60rem] w-screen flex-col items-center text-center sm:w-1/2">
            <Image
                src={image}
                alt={alt}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div
                className={`absolute bottom-[2rem] px-[2rem] ${textColor} max-w-[34rem] sm:bottom-[-2rem] sm:h-[22rem]`}
            >
                <h2 className="mb-[2.7rem] font-serif text-[2.8rem]">
                    {title}
                </h2>
                <p className="mb-[4rem] font-sans text-[1.6rem] leading-[2.7rem] sm:mb-0">
                    {description}
                </p>
            </div>
        </section>
    );
}
