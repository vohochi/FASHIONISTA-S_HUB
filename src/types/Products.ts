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
  isNewDiscounted: boolean;
  saleDecrease: true;
  size: Array<string>;
  quantity: number;
}

export default ProductItem;
