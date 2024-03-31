interface ButtonProps {
  label: string;
  type?: "submit" | "reset" | "button";
  onSubmit?: () => void;
}

const Button = ({ label, onSubmit, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className="w-full py-2 flex bg-[#0f0f0f] items-center justify-center rounded-md text-white hover:opacity-90 text-base mt-7 transition-opacity"
      onClick={onSubmit}
    >
      {label}
    </button>
  );
};

export default Button;
