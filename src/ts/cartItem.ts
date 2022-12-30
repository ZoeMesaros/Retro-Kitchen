import { ShopItemData } from "./ShopItemData";

export class CartItem {
    constructor(public shopItemData: ShopItemData, public amount: number) {
        this.shopItemData = shopItemData; //Produkt
        this.amount = amount; //Antal
    }
}