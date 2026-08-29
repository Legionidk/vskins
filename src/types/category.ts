import CardData from "./card";

export default interface CategoryData<TModalData = unknown> {
    id: string;
    name: string;
    iconUrl: string | null;
    cardsData: CardData<TModalData>[];
}
