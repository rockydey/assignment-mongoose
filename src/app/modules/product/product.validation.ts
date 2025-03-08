import Joi from 'joi';

// Variant Schema Validation
const variantValidation = Joi.object({
  type: Joi.string().required().trim(),
  value: Joi.string().required().trim(),
});

// Product Schema Validation
export const productValidation = Joi.object({
  name: Joi.string().required().trim(),
  description: Joi.string().required().trim(),
  price: Joi.number().required(),
  category: Joi.string().required().trim(),
  tags: Joi.array().items(Joi.string().trim()).required(),
  variants: Joi.array().items(variantValidation).required(),
  inventory: Joi.object({
    quantity: Joi.number().required(),
    isStock: Joi.boolean().required(),
  }).required(),
});
