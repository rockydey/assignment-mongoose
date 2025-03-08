import { IProduct } from './product.interface';
import { Product } from './product.model';

const getAllProductsFromDB = async (filter: Record<string, unknown>) => {
  const result = await Product.find(filter);
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};

const createProductIntoDB = async (payload: IProduct) => {
  const result = await Product.create(payload);
  return result;
};

export const ProductService = {
  getAllProductsFromDB,
  getSingleProductFromDB,
  createProductIntoDB,
};
