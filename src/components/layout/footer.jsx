import githubLogo from "@/assets/github.svg";
import yoPng from "@/assets/yo.png";

export default function Footer() {
    const baseClasses =
        "flex flex-col justify-center items-center bg-[#111111] border-t-2 border-[#333333] px-[50px] py-[10px] w-full text-lg font-light mt-auto";
    const responsiveClasses =
        "sm:flex-row sm:flex-row-reverse sm:justify-between xl:px-[200px]";

    return (
        <footer className={`${baseClasses} ${responsiveClasses}`}>
            <div className="flex gap-2" id="footer-buttons">
                <a
                    href="https://github.com/Legionidk/vskins"
                    id="github-button"
                    target="_blank"
                >
                    <img
                        src={githubLogo}
                        alt="Github logo"
                        className="rounded-[8px] p-2 hover:bg-[#292727]"
                        id="github-logo"
                    />
                </a>

                <div
                    className="cursor-pointer"
                    id="yo-button"
                >
                    <img
                        src={yoPng}
                        alt="yo image"
                        className="rounded-[8px] p-2 hover:bg-[#292727]"
                        id="github-logo"
                    />
                </div>
            </div>

            <p className="text-lg xl:text-2xl" id="footer-text">
                Data provided by
                <a
                    href="https://valorant-api.com"
                    className="text-[#FF4248] hover:underline ml-[5px]"
                >
                    valorant-api.com
                </a>
            </p>
        </footer>
    );
}
