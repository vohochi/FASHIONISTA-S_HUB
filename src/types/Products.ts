interface ProductItem {
  _id: string;
  id: number;
  name: string;
  image: string;
  price: number;
  price_sale: number;
  image_hover: string;
  description: string;
  category: string;
  size: Array<string>;
}

export default ProductItem;
