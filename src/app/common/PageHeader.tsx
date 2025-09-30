'use client';
import * as React from 'react';
import { IMenuLink, navigation as navMenu } from './Navbar';
import NavHeader from './NavHeader';

interface CoverBlockProps {
  img: string;
  header?: string;
  subHeader?: string;
  subTitle?: string;
  alt?: string;
  navigation?: IMenuLink[]|boolean;
  children?: React.ReactNode;
  height?: string;
  bgPosition?: string;
}

const PageHeader = ({
  img,
  children,
  navigation=navMenu,
  height='md:h-80v min-h-min',
  bgPosition='bg-center'
}: CoverBlockProps) => (
    <header
      className={`bg-cover md:bg-fixed bg-no-repeat ${bgPosition}`}
      style={{backgroundImage: `url(${img})`}}
      >
      {navigation !== false && <NavHeader /> }
      <div className={`${height} flex items-center pt-20`}>
        { children }
      </div>
    </header>
);

export default PageHeader;
