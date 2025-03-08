export type TVariant = {
  type: string;
  value: string;
};

export type IProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: {
    quantity: number;
    isStock: boolean;
  };
  isDeleted?: boolean;
};
