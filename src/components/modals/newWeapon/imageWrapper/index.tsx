import { ImageType } from "@/types/weaponModal";
import Image from "./ImageContainer";

const imageWrapperStyle =
    "flex flex-col gap-[25px] w-full p-[25px] bg-[#292727]";

interface ImagesWrapperProps {
    data: ImageType[];
}

export default function ImagesWrapper({ data }: ImagesWrapperProps) {
    return (
        <div className={imageWrapperStyle} id="images-wrapper">
            {data.map((image) => (
                <Image title={image.name} url={image.url} />
            ))}
        </div>
    );
}
