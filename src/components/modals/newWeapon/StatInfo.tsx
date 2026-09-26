interface StatInfoProps {
    name: string;
    value: string;
}

export default function StatInfo({ name, value }: StatInfoProps) {
    return (
        <div className="w-full flex justify-between" id="stat-info">
            <span className="text-[#B8B8B8] font-medium uppercase tracking-widest">
                {name}
            </span>

            <span className="text-[18px]">{value}</span>
        </div>
    );
}
