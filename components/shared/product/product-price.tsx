import { cn } from "@/lib/utils";

const ProductPrice = ({ price, className }: { price: number | string, className?: string }) => {
    // Convert price to a number if it's a string and ensure it's a valid number
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
    
    // Check if the price is a valid number
    if (isNaN(numericPrice)) {
      return <p className={cn('text-2xl font-bold', className)}>Price unavailable</p>;
    }
    
    // Format the price to ensure consistent decimal places
    const formattedPrice = numericPrice.toFixed(2);
    const [integerPart, decimalPart] = formattedPrice.split('.');
  
    return (
      <p className={cn('text-2xl font-bold', className)}>
        <span className="text-sm align-super">$</span>
        <span>{integerPart}</span>
        {decimalPart && (
          <span className="text-sm align-super">.{decimalPart}</span>
        )}
      </p>
    );
};
  
export default ProductPrice;