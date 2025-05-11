import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ModeToggle from './toggle';

import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background shadow-sm'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center'>
          <Link href='/' className='flex items-center gap-3'>
            <Image
              priority
              src='/images/logo.svg'
              width={40}
              height={40}
              alt={`${APP_NAME} logo`}
              className='h-10 w-10'
            />
            <span className='hidden text-lg font-semibold lg:block'>
              {APP_NAME}
            </span>
          </Link>
        </div>
        
        <div className='flex items-center gap-2'>
          <ModeToggle />
          <Button variant='ghost' size='sm' className='gap-2 px-3 text-sm' asChild>
            <Link href='/cart'>
              <ShoppingCart className='h-4 w-4' />
              <span>Cart</span>
            </Link>
          </Button>
          
          <Button size='sm' className='gap-2 px-3 text-sm' asChild>
            <Link href='/sign-in'>
              <UserIcon className='h-4 w-4' />
              <span>Sign In</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;