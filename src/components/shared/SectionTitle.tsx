export interface H2Props extends React.ComponentProps<"h2"> {
  containerClassName?: string;
}

export function SectionTitle({ className = "", children }: H2Props) {
  const temCor = /(^|\s)text-/.test(className);
  return (
    <div className={`${temCor ? "" : "text-brand"} ${className}`}>
      <h2 className="text-4xl sm:text-5xl md:text-6xl">{children}</h2>
    </div>
  );
}
