export default function MobileMenu() {
    return (
        <div className="fixed top-[12rem] z-30 flex w-[90%] flex-col items-center border-b-white bg-white p-[4rem] text-center before:absolute before:right-0 before:top-[-2.4rem] before:h-[2.4rem] before:w-[2.4rem] before:border-b-[2.4rem] before:border-l-[2.4rem] before:border-white  before:border-l-transparent">
            <nav>
                <ul className="mb-[4.8rem] flex flex-col gap-[3.2rem]">
                    <li className="font-sans text-[2rem] text-grey">About</li>
                    <li className="font-sans text-[2rem] text-grey">
                        Services
                    </li>
                    <li className="font-sans text-[2rem] text-grey">
                        Projects
                    </li>
                </ul>
                <button className="rounded-full bg-[#fbd600] px-[3rem] py-[1.5rem] font-serif text-[1.5rem] font-bold uppercase">
                    Contact
                </button>
            </nav>
        </div>
    );
}
