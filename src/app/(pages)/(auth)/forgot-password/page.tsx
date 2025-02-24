"use client";

import { DynamicPageView } from "@/components/dynamicExports";
import InputBox from "@/components/InputBox/InputBox";
import Spinner from "@/components/Spinner/Spinner";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { sendResetLink } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Login() {
  const [fetching, setFetching] = useState(false);

  const router = useRouter();

  const form = useForm({ mode: "onBlur" });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const handleSendEmail = async (data: any) => {
    console.log("data", data);
    !fetching && setFetching(true);
    try {
      const res = await sendResetLink();
      if (res) {
        toast("Please check your email for reset link.");
        router.push("/login");
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
    <DynamicPageView>
      {fetching && <Spinner />}
      <form onSubmit={handleSubmit(handleSendEmail)}>
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

        <SubmitButton
          className=""
          type="submit"
          handleSubmit={null}
          label="Send Email"
        />
      </form>
    </DynamicPageView>
  );
}
