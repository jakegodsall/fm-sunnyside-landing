import Image from "next/image";

export default function ServiceSection({
    image,
    alt,
    title,
    description,
    textColor,
}) {
    return (
        <section className="relative flex flex-col items-center text-center">
            <Image src={image} alt={alt} className="" />
            <div
                className={`absolute bottom-[2rem] px-[2rem] ${textColor} sm:bottom-[-5rem] sm:h-[22rem]`}
            >
                <h2 className="mb-[2.7rem] font-serif text-[2.8rem]">
                    {title}
                </h2>
                <p className="mb-[4rem] font-sans text-[1.6rem] leading-[2.7rem] sm:max-w-[34rem]">
                    {description}
                </p>
            </div>
        </section>
    );
}
