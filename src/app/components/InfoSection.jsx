import Image from "next/image";

export default function InfoSection({
    title,
    description,
    image,
    alt,
    bgColor,
}) {
    return (
        <section className="">
            <Image src={image} alt={alt} />
            <div className="px-[2.4rem] pt-[5rem] text-center">
                <h2 className="mb-[2.4rem] font-serif text-[3.2rem]">
                    {title}
                </h2>
                <p className="mb-[3.2rem] font-sans text-[1.8rem] text-grey">
                    {description}
                </p>
                <a
                    href="#"
                    className="mb-[6rem] inline-block items-center font-serif text-[1.5rem] uppercase"
                >
                    Learn More
                    <div
                        className={`relative right-[1rem] top-[-1rem] h-[1rem] w-[120%] rounded-[2.8rem] ${bgColor} opacity-25`}
                    ></div>
                </a>
            </div>
        </section>
    );
}
