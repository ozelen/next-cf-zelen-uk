import * as React from 'react';

export interface IServiceItemProps {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
  items?: string[];
}

export function ServiceItem({ title, children, subtitle, items }: IServiceItemProps) {
  return (
    <div className='md:flex flex-row py-10'>
      <div className="md:basis-1/2 text-xl border-r">
        <h2 className='pb-4 text-4xl'>
          {title}
        </h2>
        <h3 className='pb-4 text-xl italic'> { subtitle } </h3>
        { items &&
          <ul className="list-disc list-inside">
            { items.map((item, index) => (
              <li key={index} className="text-xl">{item}</li>
            ))}
          </ul>
        }
          </div>
      <div className="md:basis-1/2 p-4 text-2xl">
        { children }
      </div>
    </div>
  );
}
