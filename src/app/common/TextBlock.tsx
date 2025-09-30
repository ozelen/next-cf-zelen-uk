import * as React from 'react';

export interface ITextBlockProps {
  uptitle?: string;
  subtitle?: string;
  title?: string;
  children: React.ReactElement;
}

export function TextBlock ({title, children}: ITextBlockProps) {
  return (
    <div className="md:-mt-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 md:py-6">
      <div className='inline-block pr-4 flex-shrink bg-yellow-500 p-2'>
        { title && 
          <h1 className='text-2xl font-light tracking-tight text-zinc-900 sm:text-4xl'>{title}</h1>
        }
      </div>
      <div className='text-lg font-light dark:text-zinc-100 md:py-5'>
        { children }
      </div>
    </div>
  );
}
