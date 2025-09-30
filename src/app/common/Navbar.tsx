'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import { SocialNetworks } from './SocialNetworks';
import { usePathname } from 'next/navigation'

export interface IMenuLink {
  name: string;
  href: string;
  current: boolean;
};

export const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/services', current: false },
  { name: 'CV', href: '/cv', current: false },
  { name: 'Contacts', href: '/contacts', current: false },
  { name: 'Blog', href: 'https://blog.zelen.uk/', current: false, external: true },
];

export const getNavigation = (path?: string) => {
  return navigation.map((item) => {
    item.current = item.href === path;
    return item;
  });
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export type INavbarProps = {
  path?: string;
}

export default function Navbar() {
  const currentPath = usePathname();
  const scroll = useScrollPosition();
  return (
    <Disclosure as="nav" className={`z-[20] transition ease-in-out right-0 left-0 fixed ${scroll > 100 ? 'bg-zinc-950' : 'sm:visible md:hidden'}`}>
      {({ open }) => (
        <div className={classNames('py-4 sm:py-2', open ? 'bg-zinc-950' : '')}>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      src="/zelenuk-logo.svg"
                      alt="zelen.uk"
                      className="invert"
                      width={100}
                      height={24}
                      priority
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {getNavigation(currentPath).map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-yellow-500 text-black' : 'text-yellow-500 hover:bg-yellow-500 hover:text-black',
                          'px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <SocialNetworks />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {getNavigation(currentPath).map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}
