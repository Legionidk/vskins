import SearchBox from "../ui/searchbox";

export default function Main({ children }) {
    return (
        <main className="flex flex-col items-center justify-center gap-[20px] px-[50px] w-full xl:px-[200px]">
            {children}
        </main>
    );
}
