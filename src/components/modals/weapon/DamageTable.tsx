import { WeaponDamageData } from "@/types/weaponModal";

interface DamageTableProps {
    data: WeaponDamageData[];
}

// TODO: refac
export default function DamageTable({ data }: DamageTableProps) {
    return (
        <table id="damage-table">
            <thead className="text-[#B8B8B8] border-b-2 border-[#292727]">
                <tr>
                    <th className="text-[#B8B8B8] text-[18px] text-center font-light p-[8px_16px]">
                        Meters
                    </th>

                    {data.map((damage) => (
                        <th
                            className="uppercase tracking-widest p-[8px_16px]"
                            key={damage.rangeStart}
                        >
                            {damage.rangeStart}-{damage.rangeEnd}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody className="text-[18px]">
                <tr>
                    <td className="text-[#B8B8B8] text-center font-light p-[8px_16px]">
                        Head
                    </td>

                    {data.map((damage) => (
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

                    {data.map((damage) => (
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

                    {data.map((damage) => (
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
    );
}
