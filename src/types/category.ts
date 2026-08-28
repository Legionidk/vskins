import CardData from "./card";

export default interface CategoryData<TModalData = unknown> {
    id: string;
    name: string;
    cardsData: CardData<TModalData>[];
}
