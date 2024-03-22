import { ButtonHTMLAttributes, ReactElement } from "react";
import { ButtonType } from "../buttonTypes";
import "../css/buttons.css";

// Extend the ButtonHTMLAttributes<T> to include custom props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  children: ReactElement | ReactElement[] | string;
  loading?: boolean;
}

export const Button = ({
  variant = "default",
  children,
  loading,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`button button--${variant}`}
      disabled={rest.disabled || loading}
      aria-disabled={loading}
      {...rest}
    >
      {loading && <span>Please wait...</span>}

      {!loading && children}
    </button>
  );
};
