"use client";

import InputBox from "@/components/InputBox/InputBox";
import PageView from "@/components/PageView/PageView";
import PasswordInputBox from "@/components/PasswordInputBox/PasswordInputBox";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { registerUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();

  const form = useForm({ mode: "onBlur" });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const handleRegister = async (data: any) => {
    console.log("data", data);
    try {
      const res = await registerUser();
      if (res) {
        toast("Logged In");
        router.push("/");
      } else {
        toast("Error");
      }
    } catch (error) {
      toast("Error");
    }
  };

  return (
    <PageView>
      <InputBox
        type="text"
        className=""
        label="Username"
        register={register}
        registerOptions={{
          required: {
            message: "Field is required.",
            value: true,
          },
        }}
        name="username"
        errorMessage={errors["username"]?.message?.toString() || undefined}
      />

      <InputBox
        type="text"
        className=""
        label="Email"
        register={register}
        registerOptions={{
          required: {
            message: "Field is required.",
            value: true,
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        name="email"
        errorMessage={errors["email"]?.message?.toString() || undefined}
      />

      <PasswordInputBox
        name="password"
        className=""
        label="Password"
        register={register}
        registerOptions={{
          required: {
            message: "Field is required.",
            value: true,
          },
        }}
        errorMessage={errors["password"]?.message?.toString() || undefined}
      />

      <PasswordInputBox
        name="confirmPassword"
        className=""
        label="Confirm Password"
        register={register}
        registerOptions={{
          required: {
            message: "Field is required.",
            value: true,
          },
        }}
        errorMessage={
          errors["confirmPassword"]?.message?.toString() || undefined
        }
      />

      <SubmitButton
        className=""
        handleSubmit={handleSubmit(handleRegister)}
        label="Register"
      />
    </PageView>
  );
}
