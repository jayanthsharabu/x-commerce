import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex-between'>
        <div className='flex start'>
          <Link href='/' className='flex start'>
            <Image
              priority = {true}
              src='/images/logo.svg'
              width={40}
              height={40}
              alt={`${APP_NAME} logo`}
              className='h-10 w-10'
            />
            <span className='hidden lg:block font-bold text-2xl ml-3'>
              {APP_NAME}
            </span>
          </Link>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;