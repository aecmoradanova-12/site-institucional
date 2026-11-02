const variants = {
  solidOne:
    "p-4 rounded-2xl bg-brand text-brand-foreground hover:bg-brand/90 transition-all duration-300",
  solidTwo:
    " p-4 rounded-2xl bg-secondary text-brand-foreground hover:bg-brand/90 transition-all duration-300",
  outline:
    " p-4 rounded-2xl border border-border hover:bg-muted hover:text-foreground transition-all duration-300",
};
export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: keyof typeof variants;
}

export function Button({
  className,
  variant = "solidOne",
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={` ${className} ${variants[variant]} `} {...props}>
      {children}
    </button>
  );
}
