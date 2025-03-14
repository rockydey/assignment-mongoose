import { Request, Response } from 'express';
import { ProductService } from './product.service';
import { productValidation } from './product.validation';

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    // eslint-disable-next-line prefer-const
    let filter: Record<string, unknown> = {};

    if (searchTerm) {
      filter.$or = [
        {
          name: { $regex: searchTerm, $options: 'i' },
        },
        {
          description: { $regex: searchTerm, $options: 'i' },
        },
        {
          category: { $regex: searchTerm, $options: 'i' },
        },
        {
          tags: { $in: [searchTerm] },
        },
        {
          'variants.type': { $regex: searchTerm, $options: 'i' },
        },
        {
          'variants.value': { $regex: searchTerm, $options: 'i' },
        },
      ];
    }

    const result = await ProductService.getAllProductsFromDB(filter);
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

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    const { error, value } = productValidation.validate(productData);
    if (error) {
      res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.details[0].message,
      });
      return;
    }

    const result = await ProductService.createProductIntoDB(value);
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    const result = await ProductService.updateProductIntoDB(
      productId,
      productData,
    );

    res.status(201).json({
      success: true,
      message: 'Product updated successfully',
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductService.deleteProductFromDB(productId);
    res.status(201).json({
      success: true,
      message: 'Product deleted successfully',
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
  createProduct,
  updateProduct,
  deleteProduct,
};
