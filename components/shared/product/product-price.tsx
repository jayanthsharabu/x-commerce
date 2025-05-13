import { cn } from "@/lib/utils";

const ProductPrice = ({ price, className }: { price: number, className?: string }) => {
    const stringValue = price.toString();
    const [integerPart, decimalPart] = stringValue.split('.');
  
    return (
      <p className={cn('text-2xl font-bold', className)}>
        <span className="text-sm align-super">$</span>
        <span>{integerPart}</span>
        <span className="text-sm align-super">{decimalPart}</span>
      </p>
    );
  };
  
 
export default ProductPrice;