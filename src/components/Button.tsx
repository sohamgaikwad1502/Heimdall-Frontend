import { ReactElement } from "react";

interface ButtonProps {
  varient: "Primary" | "Secondary";
  size: "sm" | "md" | "lg";
  text: string;
  textColor?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onclick: () => void;
}

const varientStyles = {
  Primary:
    "border-none text-purple-600 bg-purple-300  hover:ring-4 hover:ring-purple-200",
  Secondary:
    "border-none text-white bg-purple-600 hover:bg-purple-500 hover:ring-4 hover:ring-purple-200",
};

const sizeStyles = {
  lg: "text-xl px-8 py-4 rounded-xl",
  md: "text-md px-4 py-2 rounded-md",
  sm: "text-sm px-2 py-1 rounded-sm",
};

const textStyles = "text-center font-light";

const Button = (props: ButtonProps) => {
  return (
    <div className="m-2">
      <button
        className={
          varientStyles[props.varient] +
          " " +
          sizeStyles[props.size] +
          " " +
          `cursor-pointer`
        }
        onClick={props.onclick}
      >
        <div className="flex justify-center items-center">
          <span className={textStyles}>{props.startIcon}</span>
          <div className={`pl-2 pr-2` + textStyles}> {props.text}</div>
          <span className={textStyles}>{props.endIcon}</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
