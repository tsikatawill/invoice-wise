import { ButtonVariantStyles } from "./../types";

// Button
export const ButtonStyles: ButtonVariantStyles & Record<"base", string> = {
  base: "p-4 hover:bg-opacity-90 font-medium rounded-[4px] active:scale-95 transition-all duration-150 ease-in-out border-none",
  ghost: "bg-transparent hover:bg-gray100",
  gray: "bg-gray50 text-black",
  noire: "bg-black text-white",
  primary: "bg-primary text-white",
};
