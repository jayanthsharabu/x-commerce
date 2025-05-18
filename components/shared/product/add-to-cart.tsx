'use client';

import {CartItem} from '@/types';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"
import { addItemToCart } from '@/lib/actions/cart.actions';



const AddToCart = ({item}: {item: CartItem}) => {
    const router = useRouter();
    return ( 
        <div className='w-full'>
            <Button variant="outline" size="icon" onClick={async () => {
                const result = await addItemToCart(item);
                
                if (result.success) {
                    toast.success(`${item.name} Added to Cart`, {
                        description: 'You can view your cart in the cart page',
                        action: {
                            label: 'Go to Cart',
                            onClick: () => {
                                router.push('/cart');
                            }
                        }
                    });
                } else {
                    toast.error(result.message);
                }
            }} className='w-full'>
                <div className='flex-center gap-2'>Add to Cart</div>
            </Button>
        </div>
     );
}
 
export default AddToCart;