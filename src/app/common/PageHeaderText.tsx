
export type IPageHeaderTextProps = {
  header: string;
  children?: React.ReactNode;
};

export function PageHeaderText({ header, children }: IPageHeaderTextProps) {
  return (
    <div className="pt-30v mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 container md:bottom-20 left-0 right-0 z-[10]">
      <h1 className="my-50 text-4xl font-light tracking-tight text-zinc-100 md:text-8xl">
        {header}
      </h1>
      <div className="my-5 text-xl md:w-1/2 font-light tracking-tight text-zinc-100 md:text-2xl">
        {children}
      </div>
    </div>
  );
}
