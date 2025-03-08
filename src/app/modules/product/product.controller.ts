import { Request, Response } from 'express';
import { ProductService } from './product.service';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);
    res.status(201).json({
      success: true,
      message: 'Product fetched successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
      error,
    });
  }
};

export const ProductController = {
  getAllProducts,
  getSingleProduct,
};
