import clsx from "clsx";

export default function HamburgerButton({
    hamburgerActive,
    setHamburgerActive,
}) {
    return (
        <div
            className="flex cursor-pointer flex-col gap-[0.5rem]"
            onClick={setHamburgerActive}
        >
            <div
                className={clsx(
                    "h-[0.2rem] w-[2.4rem] bg-white",
                    hamburgerActive && "opacity-50",
                )}
            />
            <div
                className={clsx(
                    "h-[0.2rem] w-[2.4rem] bg-white",
                    hamburgerActive && "opacity-50",
                )}
            />
            <div
                className={clsx(
                    "h-[0.2rem] w-[2.4rem] bg-white",
                    hamburgerActive && "opacity-50",
                )}
            />
        </div>
    );
}
