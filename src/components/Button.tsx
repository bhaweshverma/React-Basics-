import React from "react";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning"; //color could be out of these values only, otherwise error
  onButtonClick: () => void;
}
const Button = ({
  children,
  color = "primary",
  onButtonClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default Button;
