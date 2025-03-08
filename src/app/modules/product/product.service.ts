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

const updateProductIntoDB = async (id: string, payload: IProduct) => {
  const result = await Product.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    upsert: true,
  });
  return result;
};

export const ProductService = {
  getAllProductsFromDB,
  getSingleProductFromDB,
  createProductIntoDB,
  updateProductIntoDB,
};
