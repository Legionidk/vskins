import SkeletonCard from "./SkeletonCard";

export default function SkeletonCategory() {
    return (
        <div className="z-10 w-full flex flex-col gap-[10px]" id="skeleton-category">
            <div
                className="h-[43px] flex items-center bg-[#292727] px-[16px] py-[8px] rounded-[8px]"
                id="skeleton-title"
            >
                <div
                    className="h-[15px] w-[100px] bg-[#211E1F] rounded-[8px] animate-pulse"
                    id="skeleton-text"
                />
            </div>

            <div
                className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                id="skeleton-cards-grid"
            >
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </div>
    );
}
