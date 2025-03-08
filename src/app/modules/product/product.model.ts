import { model, Schema } from 'mongoose';
import { IProduct, TVariant } from './product.interface';

const variantSchema = new Schema<TVariant>({
  type: { type: String },
  value: { type: String },
});

const productSchema = new Schema<IProduct>({
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [variantSchema] },
  inventory: new Schema<{ quantity: number; isStock: boolean }>({
    quantity: { type: Number },
    isStock: { type: Boolean },
  }),
});

// Create a model using the schema
export const Product = model<IProduct>('Product', productSchema);
