export default interface CardData<TModalData = unknown> {
    id: string;
    name: string;
    imageUrl: string;
    modalData: TModalData;
}
