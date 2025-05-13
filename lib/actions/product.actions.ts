'use server'

import prisma from "@/db/prisma";


import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

//get latest products
export const getLatestProducts = async () => {
    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt: "desc" },
    });

    return convertToPlainObject(data);
}

//get single product
export const getProduct = async (slug: string) => {
    const data = await prisma.product.findFirst({
        where: { slug : slug }
    })

    return data;
}