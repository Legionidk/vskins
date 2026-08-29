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
                        <th />

                        {damageData.map((damage) => (
                            <th className="p-[8px_16px]" key={damage.rangeStart}>
                                {damage.rangeStart}-{damage.rangeEnd}m
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="text-[18px]">
                    <tr>
                        <td className="text-[#B8B8B8] text-center font-light p-[8px_16px]">
                            Head
                        </td>

                        {damageData.map((damage) => (
                            <td
                                className="text-center p-[8px_16px]"
                                key={damage.headDamage}
                            >
                                {damage.headDamage}
                            </td>
                        ))}
                    </tr>

                    <tr>
                        <td className="text-[#B8B8B8] text-center font-light p-[8px_16px]">
                            Body
                        </td>

                        {damageData.map((damage) => (
                            <td
                                className="text-center p-[8px_16px]"
                                key={damage.bodyDamage}
                            >
                                {damage.bodyDamage}
                            </td>
                        ))}
                    </tr>
                    
                    <tr>
                        <td className="text-[#B8B8B8] text-center font-light p-[8px_16px]">
                            Legs
                        </td>

                        {damageData.map((damage) => (
                            <td
                                className="text-center p-[8px_16px]"
                                key={damage.legsDamage}
                            >
                                {damage.legsDamage}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
