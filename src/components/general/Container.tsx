import { cn } from "../../lib/utils";

type Props = React.ComponentProps<"div">;

export const Container = ({ className, ...rest }: Props) => {
  return (
    <div
      className={cn("max-w-screen-xl mx-auto px-2 sm:px-4", className)}
      {...rest}
    >
      {rest.children}
    </div>
  );
};
