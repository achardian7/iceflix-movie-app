import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded-sm bg-red-700 p-2 text-base font-medium dark:bg-blue-900",
        props.className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
