import { getProduct } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductPrice from "@/components/shared/product/product-price";
import ProductImages from "@/components/shared/product/product-images";
import AddtoCart from "@/components/shared/product/add-to-cart";

const ProductDetailsPage = async ( props: {params: Promise<{slug: string}>}) => {
    const {slug} = await props.params;

    const product = await getProduct(slug);
    if (!product) {
        notFound();
    }

    return ( <>
    <section>
        <div className="grid grid-cols-1 md: grid-cols-5">
            <div className="col-span-2">
                <ProductImages images={product.images} />
            </div>
            <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
                    <p>{product.brand} {product.category}</p>
                    <h1 className="h3-bold">{product.name}</h1>
                    <p>{Number(product.rating)} of {product.numReviews} Reviews</p>
                    <div className="flex flex-col sm: flex-row sm: items-center gap-3">
                        <ProductPrice price={Number(product.price)} className="w-24 rounded-full bg-green-100 text-green-700 p-5 py-2" />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="font-semibold">Description</div>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className="pt-5 pr-5">
            <Card className="w-full">
  <CardContent className="space-y-2">
    {/* Row 1: Price */}
    <div className="flex justify-between">
      <div>Price</div>
      <ProductPrice price={Number(product.price)} />
    </div>

    {/* Row 2: Status */}
    <div className="flex justify-between">
      <div>Status</div>
      {product.stock > 0 ? (
        <Badge variant="outline">In Stock</Badge>
      ) : (
        <Badge className="bg-red-500 text-white">Out of Stock</Badge>
      )}
    </div>
    {product.stock > 0 && (
        <AddtoCart item={{
          productId: product.id,
          slug: product.slug,
          name: product.name,
          price: String(product.price),
          image: product.images![0],
          quantity: 1,
        }} />
    )}
  </CardContent>

</Card>

            </div>
        </div>

        </section></> );
}
 
export default ProductDetailsPage;