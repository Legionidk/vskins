import { ImageType } from "@/types/weaponModal";
import Image from "./ImageContainer";

const imageWrapperStyle =
    "flex flex-col gap-[50px] w-full p-[50px_25px] bg-[#292727]";

interface ImagesWrapperProps {
    data: ImageType[];
}

export default function ImagesWrapper({ data }: ImagesWrapperProps) {
    return (
        <div className={imageWrapperStyle} id="images-wrapper">
            {data.map((image) => (
                <Image key={image.name} alt={image.name} url={image.url} />
            ))}
        </div>
    );
}
