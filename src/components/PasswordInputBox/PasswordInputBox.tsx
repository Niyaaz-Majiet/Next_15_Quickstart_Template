import { useState } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

type Props = {
  className: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  registerOptions: RegisterOptions<FieldValues, string> | undefined;
  name: string;
  errorMessage: string | undefined;
};

export default function PasswordInputBox({
  className,
  label,
  name,
  register,
  registerOptions,
  errorMessage,
}: Props) {
  const [show, setShow] = useState(false);
  return (
    <div className={`flex flex-col p-4 ${className}`}>
      <label className="w-full h-8">{label}</label>
      <div className="flex flex-row flex-nowrap justify-between">
        <input
          type={show ? "text" : "password"}
          className={`flex  w-11/12 h-10 border border-solid ${
            errorMessage ? "border-red-600" : "border-black"
          }`}
          {...register(name, registerOptions)}
        />
        <span
          className="flex border border-solid border-black p-2 h-10 ml-4 w-1/12 justify-center text-xl"
          onClick={() => setShow(!show)}
        >
          {show ? "HIDE" : "SHOW"}
        </span>
      </div>
      {errorMessage && <label className="	text-red-600">{errorMessage}</label>}
    </div>
  );
}
