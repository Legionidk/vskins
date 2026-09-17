export default function Main({ children }) {
    return (
        <main className="z-0 flex flex-col items-center gap-[20px] w-full max-md:px-[20px] md:w-[770px] xl:w-[1160px] 2xl:w-[1550px]">
            {children}
        </main>
    );
}
