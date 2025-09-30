'use client';
import * as React from 'react';
import { Parallax } from 'react-parallax';
import { IMenuLink } from './Navbar';

interface CoverBlockProps {
  img: string;
  header?: string;
  subHeader?: string;
  subTitle?: string;
  alt?: string;
  navigation?: IMenuLink[];
}

const CoverBlock = ({img, alt, header}: CoverBlockProps) => (
    <Parallax blur={0} bgImage={img} bgImageAlt={alt} strength={200} style={{height: '300px'}}>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-[20] pointer-events-none bg-[rgba(0,0,0,0.56)]"  style={{height: '80vh'}}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-8xl">{ header }</h1>
          { <h2 className="text-2xl font-light tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"></h2> }
        </div>
      </div>
    </Parallax>
);

export default CoverBlock;
