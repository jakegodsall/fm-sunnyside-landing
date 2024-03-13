import Image from "next/image";

export default function TestimonialItem({ avatar, name, role, message }) {
    return (
        <div className="flex flex-col items-center px-[2.4rem] text-center sm:px-0">
            <Image
                src={avatar}
                alt={name}
                width="72"
                height="72"
                className="mb-[3.2rem] h-[7.2rem] w-[7.2rem] rounded-full"
            />
            <p className="mb-[3.2rem] font-sans text-[1.6rem] leading-[3.2rem] text-grey">
                {message}
            </p>
            <h3 className="mb-[0.9rem] font-serif text-[1.8rem]">{name}</h3>
            <p className="text-[1.4rem] text-[#A7AAAD]">{role}</p>
        </div>
    );
}
