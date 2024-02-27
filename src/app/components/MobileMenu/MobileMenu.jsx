export default function MobileMenu() {
    return (
        <div className="fixed top-[8rem] z-30 flex w-[90%] flex-col items-center bg-white p-[4rem] text-center">
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
