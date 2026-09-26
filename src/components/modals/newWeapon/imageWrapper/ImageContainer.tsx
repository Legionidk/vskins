const titleStyle = "text-[16px] text-[#B8B8B8]";
const imageContainerStyle = "flex flex-col gap-[10px] w-full";

interface ImageProps {
    title: string;
    url: string;
}

export default function Image({ title, url }: ImageProps) {
    return (
        <div className={imageContainerStyle} id="image-container">
            <span className={titleStyle} id="title">
                {title}
            </span>

            <img src={url} alt={`${title} image`} />
        </div>
    );
}
