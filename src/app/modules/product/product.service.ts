import { Product } from './product.model';

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const ProductService = {
  getAllProductsFromDB,
};
