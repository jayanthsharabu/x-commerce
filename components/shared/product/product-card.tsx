import ProductPrice from "./product-price";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, } from "@/components/ui/card";
const ProductCard = ({product}: {product: any}) => {
    return ( 
        <Card className="w-full max-w-sm">
            <CardHeader className="p-0 items-center">
                <Link href={`/products/${product.slug}`}>
                    <Image src={product.images[0]} alt={product.name} width={300} height={300} priority = {true} />
                </Link>
            </CardHeader>
            <CardContent className="p-4 grid gap-4">
                <div className="text-xs">{product.brand}</div>
                <Link href={`/products/${product.slug}`}>
                <h2 className="h2-bold font-medium">{product.name}</h2></Link>
                <div className="flex-between gap-4"><p>{product.rating}</p>
                {product.stock > 0 ? (<p className="font-bold"><ProductPrice price={product.price} /></p>) : (<p className="text-destructive">Out of Stock</p>)}</div>
            </CardContent>
        </Card>

     );
}
 
export default ProductCard;