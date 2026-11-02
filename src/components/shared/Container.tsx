export type ContainerProps = React.ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={className}
      {...props}
    />
  );
}