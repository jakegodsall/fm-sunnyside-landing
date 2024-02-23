import Image from "next/image";

export default function ServiceSection({ image, alt, title, description }) {
    return (
        <section className="flex flex-col items-center text-center">
            <Image src={image} alt={alt} />
            <h2 className="mb-[2.7rem] font-serif text-[2.8rem]">{title}</h2>
            <p className="mb-[4rem] font-sans text-[1.6rem] leading-[2.7rem]">
                {description}
            </p>
        </section>
    );
}
