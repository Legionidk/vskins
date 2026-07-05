export default function DamageTable({ damageData }) {
    return (
        <div
            className="w-full flex flex-col items-center rounded-[8px] border-2 border-[#292727]"
            id="damage-table"
        >
            <div
                className="w-full flex justify-center py-[8px] text-[20px] bg-[#292727]"
                id="title"
            >
                Damage
            </div>

            <table className="w-full">
                <thead className="uppercase tracking-widest text-[#B8B8B8] border-b-2 border-[#292727]">
                    <tr>
                        {damageData.map((damage) => (
                            <th className="p-[8px_16px]">
                                {damage.rangeStartMeters}-
                                {damage.rangeEndMeters}m
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-[18px]">
                    <tr>
                        {damageData.map((damage) => (
                            <td className="text-center p-[8px_16px]">
                                Head - {damage.headDamage}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        {damageData.map((damage) => (
                            <td className="text-center p-[8px_16px]">
                                Body - {damage.bodyDamage}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        {damageData.map((damage) => (
                            <td className="text-center p-[8px_16px]">
                                Leg - {damage.legDamage}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
