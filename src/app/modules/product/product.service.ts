import { Product } from './product.model';

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

export const ProductService = {
  getAllProductsFromDB,
  getSingleProductFromDB,
};
