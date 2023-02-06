import React from "react";
import classNames from "classnames";

import "./button.styles.scss";

export type ButtonVariant = "outlined" | "contained";
export type ButtonSize = "small" | "medium" | "large";

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  size = "small",
  fullWidth,
  children,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={classNames("button", buttonProps.className, {
        button_large: size === "large",
        button_medium: size === "medium",
        button_outlined: variant === "outlined",
        button_fullWidth: fullWidth,
      })}
    >
      <span
        className={classNames("buttonInner", {
          buttonInner_large: size === "large",
          buttonInner_medium: size === "medium",
          buttonInner_outlined: variant === "outlined",
        })}
      >
        {children}
      </span>
      <span
        className={classNames("buttonArrow", {
          buttonArrow_large: size === "large",
          buttonArrow_medium: size === "medium",
          buttonArrow_outlined: variant === "outlined",
        })}
      ></span>
    </button>
  );
};
