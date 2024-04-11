import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputLabelProps {
  title: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const InputLabel = ({ register, title, errors }: InputLabelProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={title} className="font-medium capitalize text-base">
        Enter {title}:
      </label>
      <input
        type="text"
        id={title}
            {...register(title)}
        className="py-2 px-2 bg-gray-100 w-full rounded-md outline-none"
      />
      <p
        className={`text-red-500 ${
          errors[title] ? "opacity-100" : "opacity-0"
        }`}
      >
        {errors[title]?.message + ""}
      </p>
    </div>
  );
};

export default InputLabel;
