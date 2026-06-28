import { XMarkIcon } from "@heroicons/react/24/outline";
import rigby from "@/assets/rigby.jpg";

export default function RigbyModal({ closeFunc }) {
    return (
        <div
            className="w-full max-w-[500px] h-fit flex flex-col items-center rounded-[16px] overflow-hidden transition-transform duration-50 ease-in-out"
            id="rigby-modal"
        >
            <div
                className="flex justify-between h-fit w-full px-[16px] py-[8px] bg-[#211E1F] text-[20px]"
                id="title"
            >
                <div className="flex gap-[5px]" id="name">
                    <p className="font-medium uppercase tracking-widest">
                        Rigby
                    </p>
                    <p className="text-[#b8b8b8]">•</p>
                    <p className="text-[#b8b8b8]">:&gt;</p>
                </div>

                <button
                    className="cursor-pointer"
                    id="close-button"
                    onClick={closeFunc}
                >
                    <XMarkIcon className="h-[24px]" />
                </button>
            </div>

            <img src={rigby} alt="Rigby image" />
        </div>
    );
}
