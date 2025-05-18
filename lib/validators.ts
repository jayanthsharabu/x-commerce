//schema for signing users in
import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
.string()
.refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(value)), 'Price must be a valid number with 2 decimal places');



export const signInSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(3, 'Password must be at least 3 characters long'),
});
export const signUpSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(3, 'Password must be at least 3 characters long'),
    confirmPassword: z.string().min(3, 'Password must be at least 3 characters long'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});

export const cartItemSchema = z.object({
    productId: z.string().min(1, 'Product ID is required'),
    name: z.string().min(1, 'Product name is required'),
    slug: z.string().min(1, 'Slug is required'),
    quantity: z.number().int().nonnegative('quantity must be a positive number').min(1, 'Quantity is required'),
    image: z.string().min(1, 'Image is required'),
    price: currency,
});

export const insertCartSchema = z.object({
    items: z.array(cartItemSchema),
    itemsPrice: currency,
    totalPrice: currency,
    shippingPrice: currency,
    taxPrice: currency,
    sessionCartId: z.string().min(1, 'Session cart ID is required'),
    userId: z.string().optional().nullable(),
})


export type SignInSchema = z.infer<typeof signInSchema>;
