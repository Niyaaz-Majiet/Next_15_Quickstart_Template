"use client";

import { DynamicPageView } from "@/components/dynamicExports";
import InputBox from "@/components/InputBox/InputBox";
import PasswordInputBox from "@/components/PasswordInputBox/PasswordInputBox";
import Spinner from "@/components/Spinner/Spinner";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { registerUser } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Register() {
  const [fetching, setFetching] = useState(false);
  const router = useRouter();

  const form = useForm({ mode: "onBlur" });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const handleRegister = async (data: any) => {
    console.log("data", data);
    !fetching && setFetching(true)
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
    }finally{
      setFetching(false)
    }
  };

  return (
    <DynamicPageView>
      {fetching && <Spinner />}
      <form onSubmit={handleSubmit(handleRegister)}>
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
          type="submit"
          handleSubmit={null}
          label="Register"
        />
      </form>
    </DynamicPageView>
  );
}
