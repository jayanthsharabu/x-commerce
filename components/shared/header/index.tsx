import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

const Header = () => {
  return (
    <header className='w-full border-b shadow-sm bg-white sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center'>
            <Image
              priority={true}
              src='/images/logo.svg'
              width={40}
              height={40}
              alt={`${APP_NAME} logo`}
            />
            <span className='hidden lg:block font-bold text-xl ml-3 text-gray-900'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className='flex items-center space-x-4'>
          <Button asChild variant='ghost' className='flex items-center gap-2'>
            <Link href='/cart'>
              <ShoppingCart className='h-5 w-5' />
              <span>Cart</span>
            </Link>
          </Button>
          <Button asChild className='flex items-center gap-2'>
            <Link href='/sign-in'>
              <UserIcon className='h-5 w-5' />
              <span>Sign In</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;