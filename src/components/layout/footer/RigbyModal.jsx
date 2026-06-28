import rigby from "@/assets/rigby.jpg";

export default function RigbyModal({ closeFunc }) {
    return (
        <div
            className={`w-full max-w-[500px] h-fit p-[8px] rounded-[16px] overflow-hidden transition-transform duration-50 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-5"}`}
            id="rigby-modal"
        >
            <img src={rigby} alt="Rigby image" className="rounded-[8px]" />
        </div>
    );
}
