import { cn } from "@/utils/cn";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        "rounded-sm bg-red-700 p-2 text-base font-medium hover:bg-red-800",
        props.className,
      )}
    >
      {props.children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
