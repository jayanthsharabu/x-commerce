import { z } from "zod";
import { insertCartSchema, cartItemSchema } from "@/lib/validators";

export type InsertCart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;