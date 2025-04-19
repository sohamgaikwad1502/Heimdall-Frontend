export interface ButtonProps {
  varient: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon: any;
  endIcon: any;
  onclick: () => void;
}

const Button = () => {
  return (
    <div className="">
      <button className="bg-amber-400 p-2 m-2">Button</button>
    </div>
  );
};

export default Button;
