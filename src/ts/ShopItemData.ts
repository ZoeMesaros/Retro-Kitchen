
export class ShopItemData {

    constructor(      
        public id: string,
        public name: string,
        public price: number,
        public desc: string,
        public img: string,
        public colors: string 
       ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.desc = desc; 
        this.img = img;
        this.colors = colors;
       }
  
  }