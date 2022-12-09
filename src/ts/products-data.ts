class Item {
    id: number;
    name: string;
    price: number;
    desc: string;
    color: string;
    img: string;
    selected: boolean;

    constructor (id:number, name:string, price:number, desc:string, color:string, img:string, selected:boolean) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.color = color;
        this.img = img;
        this.selected = selected;
    }
  }

let storeItems = [
new Item (1, "Ariete Kaffebryggare",  500, "Ariete Vintage kaffebryggare håller ditt nybryggda kaffe varmt längre. Välj själv när du vill att ditt kaffe ska vara klart och njut av den coola retrodesignen.", "blue", "\src\images\Brands\Ariete\coffe\Ariete Vintage kaffebryggare (blå).png",false),
new Item (1, "Ariete Kaffebryggare",  500, "Ariete Vintage kaffebryggare håller ditt nybryggda kaffe varmt längre. Välj själv när du vill att ditt kaffe ska vara klart och njut av den coola retrodesignen.", "blue", "\src\images\Brands\Ariete\coffe\Ariete Vintage kaffebryggare (blå).png",false),
new Item (1, "Ariete Kaffebryggare",  500, "Ariete Vintage kaffebryggare håller ditt nybryggda kaffe varmt längre. Välj själv när du vill att ditt kaffe ska vara klart och njut av den coola retrodesignen.", "blue", "\src\images\Brands\Ariete\coffe\Ariete Vintage kaffebryggare (blå).png",false),
new Item (1, "Ariete Kaffebryggare",  500, "Ariete Vintage kaffebryggare håller ditt nybryggda kaffe varmt längre. Välj själv när du vill att ditt kaffe ska vara klart och njut av den coola retrodesignen.", "blue", "\src\images\Brands\Ariete\coffe\Ariete Vintage kaffebryggare (blå).png",false)
];