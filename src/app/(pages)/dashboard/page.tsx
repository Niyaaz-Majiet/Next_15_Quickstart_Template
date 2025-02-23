"use client";

import { useAppSelector } from "@/hooks/reduxHooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Dashboard() {
  const router = useRouter();
  const authState = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!authState.isLoggedIn) {
      toast("Logging Out");
      router.push("/login");
    }else{
        router.push("/dashboard/info")
    }
  }, []);
}
