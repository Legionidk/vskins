export default function Card({ image, title = "Title" }) {
    return (
        <div
            className="min-w-[380px] flex flex-col items-center rounded-[8px] transition-color duration-50 ease-in-out border-2 hover:border-[#FF4248]"
            id="card"
        >
            <div
                className="flex items-center justify-center px-[50px] py-[25px]"
                id="image-wrapper"
            >
                <img src={image} alt={`${title} image`} className="h-[85px]" />
            </div>

            <p
                className="w-full flex items-center px-[16px] py-[8px] text-[20px] bg-[#211E1F]"
                id="title"
            >
                {title}
            </p>
        </div>
    );
}
