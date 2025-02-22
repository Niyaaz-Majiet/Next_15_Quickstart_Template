"use client";

import { useAppDispatch } from "@/hooks/reduxHooks";
import { LOGIN } from "@/redux/auth";
import { login } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    try {
      //LOGIN
      const res = await login();
      if (res) {
        dispatch(LOGIN("SIR"));
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
    <div>
      <button onClick={() => handleLogin()}>LOGIN</button>
    </div>
  );
}
