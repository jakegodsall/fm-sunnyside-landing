import Image from "next/image";

// Testimonial Avatars
import emilyAvatar from "@images/image-emily.jpg";
import thomasAvatar from "@images/image-thomas.jpg";
import jennieAvatar from "@images/image-jennie.jpg";
import TestimonialItem from "./TestimonialItem";

const testimonials = [
    {
        id: 1,
        avatar: emilyAvatar,
        name: "Emily R.",
        role: "Marketing Director",
        message:
            "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    },
    {
        id: 2,
        avatar: thomasAvatar,
        name: "Thomas S.",
        role: "Chief Operating Officer",
        message:
            "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    },
    {
        id: 3,
        avatar: jennieAvatar,
        name: "Jennie F.",
        role: "Business Owner",
        message:
            "Sunnyside's creativity and passion for the arts and crafts of our clients made it a great experience.",
    },
];

export default function TestimonialSection() {
    return (
        <section className="flex flex-col items-center bg-white pb-[8rem] pt-[4rem]">
            <h2 className="mb-[4rem] font-serif text-[1.6rem] uppercase tracking-[0.4rem] text-[#A7AAAD]">
                Client testimonials
            </h2>
            <ul className="flex flex-col gap-[6.4rem]">
                {testimonials.map((testimonial) => (
                    <li key={testimonial.id}>
                        <TestimonialItem
                            avatar={testimonial.avatar}
                            name={testimonial.name}
                            role={testimonial.role}
                            message={testimonial.message}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
