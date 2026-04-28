export default function SearchBox({ searchFunc }) {
    return (
        <input
            onChange={searchFunc}
            type="text"
            className="rounded-[8px] px-[16px] py-[8px] w-full bg-[#292727] font-light focus:bg-[#211E1F] focus:outline-none border-2 border-[#292727] xl:text-xl"
            id="search-box"
            placeholder="Type weapon name here..."
        />
    );
}
