export class ProductModel {
  _id: string;
  image: string;
  title: string;
  categories: string[];
  tags: string[];
  description: string;
  advantages: string;
  disAdvantages: string;
  characteristics: Record<string, string>;
  calculatedRating: number;
  price: number;
  oldPrice: number;
  credit: number;
}
