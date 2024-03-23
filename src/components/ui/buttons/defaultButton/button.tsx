import { ButtonHTMLAttributes, ReactElement } from "react";
import { Loader } from "../../loader/loader";
import { ButtonType } from "../buttonTypes";
import "../css/buttons.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactElement | ReactElement[] | string;
  width?: "fit-content" | "100%" | "auto" | "max-content" | "min-content";
  variant?: ButtonType;
  loading?: boolean;
  className?: string;
  loadingText?: string;
}

export const Button = ({
  variant = "default",
  children,
  loading = false,
  width = "fit-content",
  className = " ",
  loadingText,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`button transition-colors button--${variant} ${className} ${
        loading ? "button--loading" : ""
      }`}
      style={{ width }}
      disabled={rest.disabled || loading}
      aria-disabled={loading}
      {...rest}
    >
      {loading && (
        <span className="isLoading">
          {<Loader />}
          {loadingText ? loadingText : "Vennligst vent"}
        </span>
      )}

      {!loading && children}
    </button>
  );
};
