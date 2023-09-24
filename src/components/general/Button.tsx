import { ButtonStyles } from "../../lib/styles";
import { cn } from "../../lib/utils";
import { ButtonVariant } from "../../types";

type Props = React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

export const Button = ({ className, variant = "primary", ...rest }: Props) => {
  return (
    <button className={cn(ButtonStyles.base, ButtonStyles[variant], className)}>
      {rest.children}
    </button>
  );
};
