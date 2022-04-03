// export class Product {
//   public name: string;
//   public description: string;
//   public imgPath: string;

//   constructor(_name: string, _description: string, _imgPath: string) {
//     this.name = _name;
//     this.description = _description;
//     this.imgPath = _imgPath;
//   }
// }

interface Color {
  colorName: string;
  colorHex: string;
}

export interface ProductDB {
  _id: string;
  image: string;
  price: number;
  isOnSale: boolean;
  name: string;
  description: string;
  category: string;
  countInStock: number;
  __v: number;
  images: string[];
  colors: Color[];
  sizes: string[];
  dateCreated: string;
}
