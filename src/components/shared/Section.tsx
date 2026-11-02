import { Container } from "./Container";

export interface SectionProps extends React.ComponentProps<"section"> {
  containerClassName?: string;
}

export function Section({
  className = "",
  containerClassName = "",
  children,
  ...props
}: SectionProps) {
  return (
    
    <section className={`py-20 w-full ${className}`} {...props}>
      <Container
        className={`mx-auto w-full max-w-7xl px-6 lg:px-16 ${containerClassName}`}
      >
        {children}
      </Container>
    </section>
  );
}
