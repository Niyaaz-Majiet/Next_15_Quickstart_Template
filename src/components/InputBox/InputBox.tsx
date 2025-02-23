import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

type Props = {
  className: string;
  label: string;
  type: "number" | "text";
  register: UseFormRegister<FieldValues>;
  registerOptions: RegisterOptions<FieldValues, string> | undefined;
  name: string;
  errorMessage: string | undefined;
};

export default function InputBox({
  type,
  className,
  label,
  name,
  register,
  registerOptions,
  errorMessage,
}: Props) {
  return (
    <div className={`flex flex-col p-4 ${className}`}>
      <label className="w-full h-8">{label}</label>
      <input
        type={type}
        className={`w-full h-10 border border-solid ${
          errorMessage ? "border-red-600" : "border-black"
        }`}
        {...register(name, registerOptions)}
      />
      {errorMessage && <label className="text-red-600">{errorMessage}</label>}
    </div>
  );
}
