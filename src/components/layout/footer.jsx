import githubLogo from "@/assets/github.svg";
import yoPng from "@/assets/yo.png";

export default function Footer() {
    return (
        <footer className="w-full h-[60px] flex items-center justify-between px-[20px] mt-auto bg-[#111111] border-t-1 border-[#323232] text-[16px] font-light">
            <p>
                Data provided by
                <a
                    href="https://valorant-api.com/"
                    className="text-[#FF4248] ml-[5px] hover:underline"
                >
                    valorant-api.com
                </a>
            </p>

            <div
                className="flex items-center gap-[10px]"
                id="buttons-wrapper"
            >
                <a
                    className="w-[40px] h-[40px] rounded-[8px] p-[8px] hover:bg-[#323232]"
                    href="https://github.com/Legionidk/vskins"
                >
                    <img src={githubLogo} alt="GitHub logo" />
                </a>

                <button
                    className="w-[40px] h-[40px] rounded-[8px] p-[8px] hover:bg-[#323232]"
                    id="rigby-button"
                >
                    <img src={yoPng} alt="Rigby icon" />
                </button>
            </div>
        </footer>
    );
}
