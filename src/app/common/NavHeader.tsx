'use client'; 
import Image from 'next/image'
import Link from 'next/link'
import { SocialNetworks } from './SocialNetworks';
import { IMenuLink, navigation as navMenu, classNames } from './Navbar';

interface NavHeaderProps {
  navigation?: IMenuLink[];
}

export default function NavHeader ({navigation=navMenu}: NavHeaderProps) {
  return (
    <div className="top-0 hidden md:visible mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 md:flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className='w-48 py-8 px-4 bg-yellow-500'>
        <Link href="/">
          <Image
            src="/zelenuk-logo.svg"
            alt="zelen.uk"
            width={200}
            height={48}
            priority
          />
        </Link>
      </div>
      <div className="flex flex-1 space-x-4 p-5">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current ? 'text-yellow-500' : 'text-white hover:bg-yellow-500 hover:text-black',
              'px-3 py-2 text-xl'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
      <SocialNetworks />
    </div>
  );
};