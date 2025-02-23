"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { LOGOUT } from "@/redux/auth";
import { logout } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import { toast } from "react-toastify";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

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
    <div>
      <button onClick={() => handleLogout()}>LOGOUT</button>
      <Suspense fallback={<label>Loading</label>}>{children}</Suspense>
    </div>
  );
}
