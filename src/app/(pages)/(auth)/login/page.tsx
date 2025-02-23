"use client";

import InputBox from "@/components/InputBox/InputBox";
import PageView from "@/components/PageView/PageView";
import PasswordInputBox from "@/components/PasswordInputBox/PasswordInputBox";
import Spinner from "@/components/Spinner/Spinner";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { LOGIN } from "@/redux/auth";
import { login } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Login() {
  const [fetching, setFetching] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const form = useForm({ mode: "onBlur" });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const handleLogin = async (data: any) => {
    console.log("data", data);
    !fetching && setFetching(true);
    try {
      const res = await login();
      if (res) {
        dispatch(LOGIN(data?.username));
        toast("Logged In");
        router.push("/");
      } else {
        toast("Error");
      }
    } catch (error) {
      toast("Error");
    } finally {
      setFetching(false);
    }
  };

  return (
    <PageView>
      {fetching && <Spinner />}
      <form onSubmit={handleSubmit(handleLogin)}>
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

        <PasswordInputBox
          className=""
          label="Password"
          register={register}
          name="password"
          registerOptions={{
            required: {
              message: "Field is required.",
              value: true,
            },
          }}
          errorMessage={errors["password"]?.message?.toString() || undefined}
        />

        <SubmitButton
          className=""
          type="submit"
          handleSubmit={null}
          label="LOGIN"
        />
      </form>

      <div className="w-full p-4 flex flex-row flex-wrap justify-center">
        <a href="/forgot-password">Forgot Password</a>
        <a href="/register">Register</a>
      </div>
    </PageView>
  );
}
