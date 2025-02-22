"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { LOGOUT } from "@/redux/auth";
import { logout } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const authState = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      const res = await logout();
      if (res) {
        dispatch(LOGOUT());
      } else {
        toast("Error");
      }
    } catch (error) {
      toast("Error");
    }
  };

  useEffect(() => {
    if (!authState.isLoggedIn) {
      toast("Logging Out");
      router.push("/login");
    }
  }, [authState.isLoggedIn]);

  return (
    <div className="">
      HOME PAGE
      <br />
      {authState.user}
      <br />
      <button
        onClick={() => handleLogout()}
        style={{
          color: "white",
          backgroundColor: "blue",
          lineHeight: 10,
          padding: 20,
        }}
      >
        LOGOUT
      </button>
    </div>
  );
}
